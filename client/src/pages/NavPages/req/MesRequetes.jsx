import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MesRequetes.css";
import SessCard from "./SessCard";

const link = "https://pfe-back-ye.herokuapp.com/";


const MesRequetes = () => {

    
  const [sess, setsess] = useState([]);

  useEffect(() => {
    axios
      .get(`${link}sceance/get/${localStorage.getItem('username')}`, {
        headers: { 
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem(
        //   "hop",
        
        //   res.data.map((el) => el.name)
        // );
        setsess(res.data.map((el) => el));
        
      });
  }, []);
  
  console.log('object');
  console.log(sess);
  
var cpt = 0;

  return (
    <div id="soCont">
      <div id="sostxt">Mes requetes de teleconsultation</div>
      <div id="soscard">
          
        {sess.map((el) => (
          <SessCard time={el.time} id={++cpt} date={el.date} med1={el.medecin1.firstname + ' ' + el.medecin1.lastname} patient={el.patient.firstname + ' ' + el.patient.lastname}  />
        ))}
      </div>
    </div>
  );
};

export default MesRequetes;
