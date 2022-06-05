import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import Card from "../../UI/Card";
import classes from "../FormInput.module.css";
import FormInput from "../FormInput";
import { useState } from "react";
import Button from "../../UI2/Button";
import axios from "axios";
import "./FormA.css";
import { useEffect } from "react";

function FormA(props) {
  const [values, setValues] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    hopitalResp: "",
    // wilaya: "",
  });

  const [hop, sethop] = useState([]);
  const sendRequest = async () => {
    const newP = { password: "13102001" };
    setValues(newP);

    const res = await axios
      .post("http://localhost:3001/admin/", {
        email: values.email,
        username: values.username,
        firstname: values.firstname,
        lastname: values.lastname,
        password: values.password,
        hopitalResp: values.hopitalResp,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    console.log(data.kind);
    // console.log(res.status);
    console.log(res);

    if (res.status == 201) {
      alert("creation success");
    } else {
      alert("Please check probs");
    }

    return data;
  };

  const inputs = [
    {
      id: 1,
      name: "lastname",
      //value: { enteredLastName },
      placeholder: "Nom",
      errorMessage: "le nom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      //onChange: { lastNameChangeHandler },
      pattern: "^[A-Za-z]{3,16}$",

      // onBlur: { focusHandler },
    },
    {
      id: 2,
      name: "firstname",
      //value: { enteredFirstName },
      placeholder: "Prenom",
      errorMessage: "le Prenom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      //onChange: { FirstNameChangeHandler },
      pattern: "^[A-Za-z]{3,16}$",

      // onBlur: { focusHandler },
    },
    {
      id: 3,
      name: "username",
      placeholder: "Username",
      errorMessage: "* Username ne doit etre entre 3 et 16 caractéres",

      //value: { ent"",eredUserName },
      required: true,
      type: "text",
      //  onChange: { UsernameChangeHandler },
      pattern: "^[A-Za-z0-9]{3,16}$",

      //onBlur: { focusHandler },
    },
    {
      id: 4,
      name: "email",
      placeholder: "Email",
      errorMessage: "enter a valid email address",
      //value: { ent"",eredEmail },
      required: true,
      type: "email",
      //onChange: { emailChangeHandler },

      // onBlur: { focusHandler },
    },
  ];

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  }

  function addUserHandler(event) {
    event.preventDefault();
    console.log("submit");
    console.log(values);
    //send http request
    sendRequest();
  }

  const handleChange = (event) => {
    // console.log('1st'+event.target.value)
    setValues({ ...values, hopitalResp: event.target.value });
    // console.log(values)
  };

  useEffect(() => {
    sethop(localStorage.getItem("hop").split(","));
    console.log(hop);
  }, []);

  return (
    <Card className={classes.input}>
      <form className={"formo"} onSubmit={addUserHandler}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <FormControl>
          <InputLabel id="demo-simple-select-label">Hopital</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            // value={value}
            label="Age"
            onChange={handleChange}
            defaultValue=''
          >
            {hop.map((element) => (
              <MenuItem value={element}>{element}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className={"buto"} type="submit">
          Create
        </Button>
      </form>
    </Card>
  );
}

export default FormA;
