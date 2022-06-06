import React from "react";
import "./Aso.css";


import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "../../../../Components/UI/Card";
import FormInput from "../../../../Components/Users/FormInput";
// import Button from "../../../../Components/UI/Button";


const Aso = () => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    hopitalResp: "",
    // wilaya: "",
  });

  const [Meds, setMeds] = useState([]);
  const [Username, setUsername] = useState();

  const sendRequest = async () => {

    const res = await axios
      .post("http://localhost:3001/med/toResp/", {
        username: Username,
      })
      .catch((err) => console.log(err));

    const data = await res.data;


    
    if (res.status == 201) {
      alert("assign succes");
    } else {
      alert("Please check probs");
    }
    console.log(data.kind);
    // console.log(res.status);
    console.log(res);


    return data;
  };



  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  }

  function addUserHandler(event) {
    event.preventDefault();
    console.log("submit");
    console.log(values);
    sendRequest();
  }

  const handleChange = (event) => {
    setUsername( event.target.value );
  };

  useEffect(() => {
    axios
    .get("http://localhost:3001/med/all", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem(
        "mod",
        res.data.map((el) => el.username)
      );
      setMeds(res.data.map((el) => el.username));
    });
  }, []);

  return (
    <div id="cardo">
      <form id="formo" onSubmit={addUserHandler}>
        <div id="loltxt">
          Liste Des Medecins :
        </div>
        <FormControl size='small' id="hi">
          <InputLabel id="demo-simple-select-label">Medecins</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            // value={value}
            label="Age"
            onChange={handleChange}
            defaultValue=""
          >
            {Meds.map((element) => (
              <MenuItem value={element}>{element}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button id="buto" type="submit">
          Assign
        </Button>
      </form>
    </div>
  );
};

export default Aso;
