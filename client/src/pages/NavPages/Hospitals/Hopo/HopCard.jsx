import React from "react";
import "./HopCard.css";
import Spes from "./spes";
import axios from "axios";
import  { useEffect, useState } from "react";

const HopCard = (props) => {
    
    const link = "https://pfe-back-ye.herokuapp.com/";

    const [last, setlast] = useState([]);

    useEffect(() => {
      axios
        .post(`http://localhost:3001/hopital/couple`, {
            hopoo: props.name,
        })
        .then((res) => {
          console.log(res.data);
          setlast(res.data.map((el) => el));
        });
    }, []);
    console.log(props.name);
    console.log(last);
  return (
    <div id="cardoo">
      <div id="titleH">{props.name}</div>
      <div id="adress">     
        <div id="txtadr">Adresse</div>
        <div id="stringad">{props.ad}</div>
      </div>
      <div id="specl">
        <div id="speso">specialite :</div>
        <div id="specCon">
            {last.map((el) => (
          <Spes spec={el.specialite.name} first={el.firstname} last={el.lastname}  />
        ))}
        </div>
      </div>
    </div>
  );
};

export default HopCard;
