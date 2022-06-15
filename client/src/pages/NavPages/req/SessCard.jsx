import React from "react";
import "./SessCard.css";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import HealthAndSafetyTwoToneIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import { IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
const SessCard = (props) => {
  return (
    <div id="cardSes">
      <div id="req">Demande {props.id}</div>
      <div id="restal">
        <div id="titleSes">
          {" "}
          <CalendarTodayTwoToneIcon /> {props.date}
        </div>
        <div id="timeSes">
          {" "}
          <AccessTimeTwoToneIcon /> {props.time}
        </div>
        <div id="med1">
          {" "}
          <HealthAndSafetyTwoToneIcon /> {props.med1}   
        </div>
        <div id="pat">
          {" "}
          <PersonOutlineTwoToneIcon /> {props.patient}
        </div>
        <div id="sesconf">
          <IconButton aria-label="delete">
            <CheckCircleIcon  style={{ color: 'green' }} />
          </IconButton>
        </div>
      </div>
      {/* <div id="titleH"></div> */}
    </div>
  );
};

export default SessCard;
