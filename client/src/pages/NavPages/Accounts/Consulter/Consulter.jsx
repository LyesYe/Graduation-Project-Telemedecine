import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Consulter.css";

import Rec from "../../../../Components/affichage/Rec.jsx";
import axios from "axios";

const Consulter = () => {

  //   const [nom, setnom] = useState([]);
  //   const [hopital, sethopital] = useState([]);
  const [fun, setfun] = useState([]);
  const [user, setuser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem(
        //   "hop",
        //   res.data.map((el) => el.name)
        // );

        setfun(Object.entries(res.data));
      });
  }, []);

  const handleChange = (event) => {
    setuser(event.target.value);
    axios
      .get(`http://localhost:3001/${event.target.value}/all`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem(
        //   "hop",
        //   res.data.map((el) => el.name)
        // );

        setfun(Object.entries(res.data));
      });
  };

  //   const sendRequest = async () => {
  //     const res = await axios
  //       .get("localhost:3001/med/all", {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         // localStorage.setItem(
  //         //   "hop",
  //         //   res.data.map((el) => el.name)
  //         // );
  //         // setnom(res.data.map((el) => el.firstname + "" + el.firstname ));
  //         // sethopital(res.data.map((el) => el.hopital));
  //         // setfun(res.data.map((el) => el.kind));
  //         setfun(res.data);
  //       });

  //     const data = await res.data;

  //     // console.log(res.status);
  //     console.log(res);

  //     return data;
  //   };

  console.log(fun);

  return (
    <div id="container">
      <div id="up">
        <div id="txt">Type :</div>
        <FormControl variant="filled" size="small" sx={{ m: 2, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-filled-label">Selectioner un type d'utilisateur</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="tSlect"
            value={user}
            onChange={handleChange}
            defaultValue=''
          >
            <MenuItem value="admin">Admins</MenuItem>
            <MenuItem value="med">Medecin</MenuItem>
            <MenuItem value="infirmier">Infirmier</MenuItem>
            <MenuItem value="patient">Patients</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="down">
        {fun.map((element) => (
          <Rec
            name={element[1].firstname + " " + element[1].lastname}
            hopital={element[1].email}
            fun={element[1].kind}
          />
        ))}
      </div>
    </div>
  );
};

export default Consulter;
