import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import FormA from "../../../../Components/Users/admin/FormA";
import FormI from "../../../../Components/Users/infirmier/FormI";
import FormM from "../../../../Components/Users/medecin/FormM";
import FormP from "../../../../Components/Users/patient/FormP";
import "./Creation.css";
const Creation = () => {

    const [tUser, setTuser] = React.useState('1');

  const handleChange = (event) => {
    setTuser(event.target.value);
  };

  return (
    <div className="all">
      <div className="up">
        <div className="txt">
            Cree un compte:
        </div>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Utilisateur</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            value={tUser}
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
            {tUser == "1" && <FormA className="cardi"/>}
            {tUser == "2" && <FormM/>}
            {tUser == "3" && <FormI/>}
            {tUser == "4" && <FormP/>}
    </div>
  );
};

export default Creation;
