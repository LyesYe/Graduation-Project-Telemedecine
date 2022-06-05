import React, { useEffect, useState } from "react";

import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import CallThingies from "../../Components/call/CallThingies";
import Notifications from "../../Components/Notifictions/Notifications";
import {
  AppBar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import "./vid.css";
import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 100px',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '600px',
//     border: '2px solid black',

//     [theme.breakpoints.down('xs')]: {
//       width: '90%',
//     },
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// }));

const App = () => {
  //   const classes = useStyles();
  const [dato, setdato] = useState();
  const [specialites, setspecialites] = useState([]);
  const [spi, setspi] = useState();


  const [values, setValues] = useState({
    time: "",
    date: "",
    medecin11: "",
    medecin22: "",
    code: "",
    specialitee: "",
    // wilaya: "",
  });


  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  }


  const sendRequest = async () => {
    // const newP = { password: "13102001" };
    // setValues(newP);
    const res = await axios
      .post("http://localhost:3001/sceance/", {
        time: values.time,
        date: values.date,
        medecin11: values.medecin11,
        medecin22: values.medecin22,
        code: values.code,
        specialitee: values.specialitee,
        // hopitalA: values.hopitalA,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    // console.log(data.kind);
    // console.log(res.status);
    console.log(res);

    if (res.status == 201) {
      alert("session success");
    } else {
      alert("Please check probs");
    }

    return data;
  };


  // const handleChange = (event) => {
  //   setdato(event.target.value);
  // };

  // const handleChange2 = (event) => {
  //   setspi(event.target.value);
  // };

  useEffect(() => {
    axios
      .get("http://localhost:3001/specialite/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "sop",
          res.data.map((el) => el.name)
        );
        setspecialites(localStorage.getItem("sop").split(","));
      });
  }, []);

  function addUserHandler(event) {
    event.preventDefault();
    console.log("submit");
    // console.log(inputs);
    
    sendRequest();
  }



  return (
    <div id="telecontainer">
      <div id="txtTele">Demander Un Avis D'un Specialist</div>
      {/* <div id="resTele"> */}
        <form id="resTele" onSubmit={addUserHandler}>
          <div id="txtdate">Date :</div>
          <TextField
            name="someDate"
            label="Some Date"
            InputLabelProps={{ shrink: true, required: true }}
            type="date"
            defaultValue={dato}
            onChange={onChange}
          />
          <div id="txtdate">Specialite :</div>
          <FormControl sx={{ m: 2, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label2">Specialite</InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="select2"
              // value={value}
              label="spec"
              onChange={onChange}
              defaultValue=""
            >
              {specialites.map((element) => (
                <MenuItem value={element}>{element}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div id="butp">
            <Button type="submit" color="primary">
              Create
            </Button>
          </div>
        </form>
      {/* </div> */}
    </div>
    // {/* <VideoPlayer />
    // <CallThingies>
    //   <Notifications />
    // </CallThingies> */}
  );
};

export default App;
