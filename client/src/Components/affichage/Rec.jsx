import React from "react";
import "./Rec.css";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
const Rec = (props) => {
  return (
    <div id="all">
      <div id="first">{props.name}</div>
      <div id="sec">{props.hopital}</div>
      <div id="third">{props.fun}</div>
      <div id="fourth">
        <DeleteOutlineRoundedIcon  style={{ color: 'white' }}/>
      </div>
      <div id="fifth">
        <EditRoundedIcon  style={{ color: 'white' }}/>
      </div>
    </div>
  );
};

export default Rec;
