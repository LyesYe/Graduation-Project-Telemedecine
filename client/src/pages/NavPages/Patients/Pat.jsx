import React from "react";
import "./Pat.css";
import TextField from '@mui/material/TextField';

const Pat = () => {
  return (
    <div id="containPat">
      <div id="searchPat">
        <TextField id="standard-basic" label="Chercher un patient" variant="standard" />
      </div>
      <div id="restPat"></div>
    </div>
  );
};

export default Pat;
