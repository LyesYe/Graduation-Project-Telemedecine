import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import React from "react";
import FormA from "../../../../Components/Users/admin/FormA";
import FormI from "../../../../Components/Users/infirmier/FormI";
import FormM from "../../../../Components/Users/medecin/FormM";
import FormP from "../../../../Components/Users/patient/FormP";
import "./Creation.css";
const Creation = (props) => {

    const [tUser, setTuser] = React.useState('1');

  const handleChange = (event) => {
    setTuser(event.target.value);
  };

  return (
    <div className="all">
      <div className="ups">
        <div className="txt">
            Cree un compte:
        </div>

        
        <FormControl variant="filled" size="small" sx={{ m: 2, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-label">Utilisateur</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            value={tUser}
            defaultValue=''
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>Medecin</MenuItem>
            <MenuItem value={3}>Infimier</MenuItem>
            <MenuItem value={4}>Patient</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="down"></div>
            {tUser == "1" && <FormA className="cardi" hopArray ={props.hopArray}/>}
            {tUser == "2" && <FormM/>}
            {tUser == "3" && <FormI hopArray ={props.hopArray}/>}
            {tUser == "4" && <FormP/>}
    </div>
  );
};

export default Creation;
