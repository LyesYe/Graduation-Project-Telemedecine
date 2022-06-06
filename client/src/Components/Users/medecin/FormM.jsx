import Card from "../../UI/Card";
import classes from "../FormInput.module.css";
import FormInput from "../FormInput";
import { useEffect, useState } from "react";
import Button from "../../UI2/Button";
import axios from "axios";
import "./FormM.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function FormM(props) {
  const [values, setValues] = useState({
    lastname: "",
    firstname: "",
    username: "",
    email: "",
    password: "",
    specialiteA: "",
    hopitalA: "",
  });

  const [hop, sethop] = useState([]);
  const [sop, setsop] = useState([]);

  const sendRequest = async () => {
    const newP = { password: "13102001" };
    setValues(newP);
    const isResp = '0';
    const res = await axios
      .post("http://localhost:3001/med/", {
        email: values.email,
        username: values.username,
        firstname: values.firstname,
        lastname: values.lastname,
        password: values.password,
        specialiteA: values.specialiteA,
        hopitalA: values.hopitalA,
        isResp:isResp,
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
      placeholder: "Nom",
      errorMessage: "le nom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: 2,
      name: "firstname",
      placeholder: "Prenom",
      errorMessage: "le Prenom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: 3,
      name: "username",
      placeholder: "Username",
      errorMessage: "* Username ne doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 4,
      name: "email",
      placeholder: "Email",
      errorMessage: "enter a valid email address",
      required: true,
      type: "email",
    },
    {
      id: 8,
      name: "Number",
      placeholder: "Numéro",
      type: "number",
      pattern: "^d{10}$",
      required: "true",
    },
  ];

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  }

  function addUserHandler(event) {
    event.preventDefault();
    console.log("submit");
    console.log(inputs);
    sendRequest();
  }

  const handleChange = (event) => {
    // console.log('1st'+event.target.value)
    setValues({ ...values, hopitalA: event.target.value });
    // console.log(values)
  };

  const handleChange2 = (event) => {
    // console.log('1st'+event.target.value)
    setValues({ ...values, specialiteA: event.target.value });
    // console.log(values)
  };


  useEffect(() => {
    sethop(localStorage.getItem('hop').split(","))
    setsop(localStorage.getItem('sop').split(","))
  }, []);

  console.log(values);
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
            id="selectM"
            // value={value}
            label="hopM"
            onChange={handleChange}
            defaultValue=''
          >
            {hop.map((element) => (
              <MenuItem value={element}>{element}</MenuItem>
            ))}
          </Select>
        </FormControl>


        <FormControl>
          <InputLabel id="demo-simple-select-label2">Specialite</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="select2"
            // value={value}
            label="spec"
            onChange={handleChange2}
            defaultValue=''
          >
            {sop.map((element) => (
              <MenuItem value={element}>{element}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
}

export default FormM;

