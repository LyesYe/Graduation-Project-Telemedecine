import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinTele.css";
const JoinTele = () => {
  const history = useNavigate();

  const [code, setcode] = useState("");

  function onChange(event) {
    console.log(event.target.name);
    setcode(event.target.value);
    console.log(event.target.value);
  }

  const addUserHandler = async (event) => {
    event.preventDefault();
    localStorage.setItem("coder", code);

    // setValues({ ...values, medecin22: user2 });
    const Session = await sendRequest();
    console.log("salaaam");
  };

  const sendRequest = async () => {
    const res2 = await axios
      .get(`http://localhost:3001/sceance/${code}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .catch((err) => console.log(err));

    console.log("after getting session");

    const data2 = await res2.data;
    console.log(res2);

    console.log(data2);

    if (data2) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      var today = yyyy + "-" + mm + "-" + dd;

      console.log(today);


      if (data2.date == today) {
        alert("session joined");
        history("/FinalCall");
      } else {
        alert("wrong date");
      }

     
      // history("/Teleconsulation");
    } else {
      alert("Code incorrecte ");
    }
    return data2;
  };

  return (
    <div id="telecontainer">
      <div id="txtTele">
        <div id="txtop">
          Rejoindre Une Sceance
          {/* Demander l'avis d'un specialist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ou */}
        </div>
      </div>
      <form id="resTele" onSubmit={addUserHandler}>
        <div id="txtdate">Code de la sceance :</div>
        <TextField
          name="code"
          label="code"
          InputLabelProps={{ shrink: true, required: true }}
          type="text"
          defaultValue=""
          onChange={onChange}
        />

        <div id="butp">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Join
          </Button>
        </div>
      </form>
      {/* </div> */}
    </div>
    // {/* <VideoPlayer />
    // <CallThingies>
    //   <Notifications />
    // </CallThingies> */}
    // {/* <VideoPlayer />
    // <CallThingies>
    //   <Notifications />
    // </CallThingies> */}
  );
};

export default JoinTele;
