import React, { useContext, useEffect, useState } from "react";

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
import { Link, useNavigate } from "react-router-dom";
import { SocketContext } from "../../Context";


const link = "https://pfe-back-ye.herokuapp.com/";

const App = () => {


  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');





  const history = useNavigate();

  //   const classes = useStyles();
  const [dato, setdato] = useState();
  const [specialites, setspecialites] = useState([]);
  const [patientes, setpatients] = useState([]);
  const [spi, setspi] = useState();

  const [values, setValues] = useState({
    time: "13h",
    date: "",
    medecin11: localStorage.getItem("username"),
    medecin22: "",
    code: me,
    specialitee: "",
    patiente: "",
    // wilaya: "",
  });

  function onChange(event) {
    console.log(event.target.name);
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  }

  const sendRequest = async () => {
    // console.log(medecin22);
    setValues({ ...values, time: "13h" });
    // setValues({ ...values, code: "abcde" });
    setValues({ ...values, medecin11: localStorage.getItem("username") });
    // setValues({ ...values, medecin22: medecin22 });

    console.log("submit Sceance");
    console.log(values);
    const res2 = await axios
      .post(`${link}sceance/`, {
        time: values.time,
        date: values.date,
        medecin11: values.medecin11,
        patiente: values.patiente,
        // medecin22: values.medecin22,
        code: values.code,
        specialitee: values.specialitee,
        // hopitalA: values.hopitalA,
      })
      .catch((err) => console.log(err));

    console.log("object");

    const data2 = await res2.data;
    console.log(res2);

    console.log(data2);

    if (res2.status == 201) {
      alert("session success");
      history("/finalCall");
    } else {
      alert("Please check ");
    }
    return data2;
  };

  useEffect(() => {
    console.log("hi");
    axios
      .get(`${link}specialite/all`, {
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
        console.log(localStorage.getItem("sop"));

        setspecialites(res.data.map((el) => el.name));
      });

    axios
      .get(`${link}patient/all`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "pat",
          res.data.map((el) => el.username)
        );
        setpatients(res.data.map((el) => el.username));
      });
  }, []);

  const addUserHandler = async (event) => {
    event.preventDefault();

    console.log(values.specialitee);
    // console.log(values.patientee);

    // setValues({ ...values, medecin22: user2 });
    const Session = await sendRequest();
    console.log("salaaam");
    {
      Session.medecin2.username != 0 &&
        localStorage.setItem("user2", Session.medecin2.username);
    }
  };

  return (
    <div id="telecontainer">
      <div id="txtTele">
        <div id="txtop">
          Demander l'avis d'un specialist
          {/* Demander l'avis d'un specialist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ou */}
        </div>
        <div id="outxt">Ou</div>
        <div id="joino">
          <Button
            component={Link}
            to="/Teleconsulation"
            variant="outlined"
            type="submit"
            color="primary"
          >
            Rejoindre Une Sceance
          </Button>
        </div>
      </div>
      {/* <div id="resTele"> */}
      <form id="resTele" onSubmit={addUserHandler}>
        <div id="txtdate">Date :</div>
        <TextField
          name="date"
          label="date"
          InputLabelProps={{ shrink: true, required: true }}
          type="date"
          defaultValue={dato}
          onChange={onChange}
        />
        <div id="txtdate">Specialite :</div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label2">Specialite</InputLabel>
          <Select
            name="specialitee"
            labelId="demo-simple-select-label2"
            id="select2"
            value={values.specialitee}
            label="specialite"
            onChange={onChange}
            defaultValue={values.specialitee}
          >
            {specialites.map((element) => (
              <MenuItem value={element}>{element}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div id="txtdate">Patient :</div>

        <FormControl sx={{ m: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label5">Patient</InputLabel>
          <Select
            name="patiente"
            labelId="demo-simple-select-label5"
            id="select5"
            value={values.patiente}
            label="patient"
            onChange={onChange}
            defaultValue=""
          >
            {patientes.map((element) => (
              <MenuItem value={element}>{element}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <div id="butp">
          <Button variant="contained" type="submit" style={{ color: 'black' }}  color="primary" size="large">
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
