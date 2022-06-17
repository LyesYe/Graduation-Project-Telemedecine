import React, { useEffect, useState } from "react";
import HopCard from "./HopCard";
import "./Hopo.css";
import axios from "axios";

const link = "https://pfe-back-ye.herokuapp.com/";

const Hopo = () => {
  const [hopitales, sethopitales] = useState([]);

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
        sethopitales(res.data.map((el) => el));
      });
  }, []);

  console.log("object");
  console.log(hopitales);

  return (
    <div id="hoCont">
      <div id="hoptxt">Liste des Hopiteaux</div>
      <div id="hopcard">
        {hopitales.map((el) => (
          <HopCard name={el.name} ad={el.adress} />
        ))}
      </div>
    </div>
  );
};

export default Hopo;
