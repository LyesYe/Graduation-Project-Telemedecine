import React, { useEffect, useState } from "react";
import "./spes.css";
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import axios from "axios";
const Spes = (props) => {


  return (
    <div id="continor">
      <div id="sepa">
        <HealthAndSafetyIcon/>
        <div id="sepaTxt">{props.spec}</div>
      </div>
      <div id="med">
        <PersonOutlineTwoToneIcon/>
        <div id="medTct">{props.first} {props.last} </div>
      </div>
    </div>
  );
};

export default Spes;
