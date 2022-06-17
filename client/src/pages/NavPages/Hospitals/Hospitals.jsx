



import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SideNavBut from "../../../Components/random/sideNavBut/SideNavBut";
import FormA from "../../../Components/Users/admin/FormA";
import FormI from "../../../Components/Users/infirmier/FormI";
import FormM from "../../../Components/Users/medecin/FormM";
import FormP from "../../../Components/Users/patient/FormP";
import Test from "../../test/Test";
import Aso from "./Aso/Aso";
import Hopo from "./Hopo/Hopo";

import "./Hospitals.css";


const link = "https://pfe-back-ye.herokuapp.com/";


const Hospitals = (props) => {
  const [components, setComponents] = useState("first");

  const [hopitales, sethopitales] = useState([]);
  const [specialites, setspecialites] = useState([]);

  useEffect(() => {
    axios
      .get(`${link}hopital/all`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "hop",
          res.data.map((el) => el.name)
        );
        sethopitales(res.data.map((el) => el.name));
      });

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
        setspecialites(res.data.map((el) => el.name));
      });
  }, []);

  // console.log("hi - "+localStorage.getItem())
  console.log("hi");
  return (
    <div id="accontainer">
      <div className="side">
        <Button id="butt" onClick={() => setComponents("first")}>
          {" "}
          Consulter Les Hopiteaux
        </Button>
        <Button id="butt" onClick={() => setComponents("second")}>
          {" "}
          Assign Responsables
        </Button>
      </div>
      <div className="left">
        {components === "first" && <Hopo />}
        {components === "second" && <Aso />}
        {/* {components === "third" && (
          <Creation hopArray={hopitales} sopArray={specialites} />
        )}
        {/* {components === "third" && <Creation  />} */}
        {components === "fourth" && <Test />} 
      </div>
    </div>
  );
};

export default Hospitals;

