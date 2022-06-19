import React, { useState } from "react";
import "./Pat.css";
import TextField from '@mui/material/TextField';
import axios from "axios";
// import Button from "../../UI2/Button";
import { Button,FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import To from "./To";

const Pat = () => {

  const [values, setValues] = useState();
  const [fi, setFi] = useState(null);

  const handleChange = (event) => {
    // console.log('1st'+event.target.value)
    setValues( event.target.value );
    // console.log(values)
  };
  // const link = "https://pfe-back-ye.herokuapp.com/";
  const link = "http://localhost:3001/";


  const sendRequest = async () => {
    console.log(values)
    const res = await axios
      .post(`${link}patient/show/`, {
        name: values,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    // console.log(data.kind);
    // console.log(res.status);
    console.log(res);

    if (res.status == 200) {
      alert("found ");
      setFi(data)

    } else {
      alert("Please check probs");
    }

    return data;
  };

  function addUserHandler(event) {
    event.preventDefault();
    console.log("submit");
    // console.log(inputs);
    sendRequest();
  }

  return (
    <div id="containPat">
      <div id="searchPat">
        <form  onSubmit={addUserHandler}>
        <TextField id="standard-basic" label="Chercher un patient" variant="standard" onChange={handleChange} fullWidth/>
        <Button id="find" type="submit">
          find
        </Button>
        </form>
      </div>
      <div id="restPat">
       {fi && <To data={fi}/>}
      </div>
    </div>
  );
};

export default Pat;
