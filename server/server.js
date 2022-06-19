const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  user = require("./models/user"),
  userRouter = require("./routes/user"),
  authRouter = require("./routes/auth"),
  medRouter = require("./routes/medecin"),
  admRouter = require("./routes/admin"),
  patRouter = require("./routes/patient"),
  infRouter = require("./routes/infirmier"),
  hospRouter = require("./routes/hospital"),
  specRouter = require("./routes/specialite"),
  sceanceRouter = require("./routes/sceance"),
  //cookieParser = require("cookie-parser"),

  port = process.env.PORT || 3001;
const nodemailer = require("nodemailer");

const server = require("http").createServer(app);

const cors = require("cors");

//for .env file to work
require("dotenv").config({ path: "./.env" });

app.use(cors());
app.use(express.json());
//app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/med", medRouter);
app.use("/admin", admRouter);
app.use("/infirmier", infRouter);
app.use("/patient", patRouter);
app.use("/hopital", hospRouter);
app.use("/specialite", specRouter);
app.use("/sceance", sceanceRouter);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Running");
});

//------------------------------------------------------------------------------------------

io.on("connection", (socket) => {
  socket.emit("me", socket.id); // this will give us our id on the front end side
  console.log("jjjjjjjjjjjjjjjjjjj");
  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

//------------------------------------------------------------------------------------------

app.post("/send_mail", cors(), async (req, res) => {
  console.log('lezgooooooooooooooooooooooooooooooooooooooooo')
  let { password , email } = req.body;
  console.log(password);

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "MyDecine@outlook.com",
      pass: "Lyesipogaa13102001",
    },
  });

  var mailOptions = {
    from: "MyDecine@outlook.com",
    to: email,
    subject: "MyDecine Password",
    text: `Votre Mot de passe pour s'authetifier a la platforme est : ${password}`,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

mongoose.set("debug", true); // in devolpment process
mongoose
  .connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "pfeAPI",
  })
  .then((con) => {
    console.log(
      "Database is connected------------------------------------------------------------------------------------------------------------------------"
    );
    app.listen(port, () => {
      console.log(`Server started on ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
