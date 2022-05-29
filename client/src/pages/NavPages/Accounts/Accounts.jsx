import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNavBut from '../../../Components/random/sideNavBut/SideNavBut';
import FormA from '../../../Components/Users/admin/FormA';
import FormI from '../../../Components/Users/infirmier/FormI';
import FormM from '../../../Components/Users/medecin/FormM';
import FormP from '../../../Components/Users/patient/FormP';

import './accounts.css'
import Creation from './Creation/Creation';
const Accounts = () => {

    const [components, setComponents] = useState("first"); 

    return (
        <>
        <div className="side">
            <Button id='butt' onClick={() => setComponents("first")}> Consulter</Button>
            <Button id='butt' onClick={() => setComponents("second")}> Gestion</Button>
            <Button id='butt' onClick={() => setComponents("third")}> Creation</Button>
            <Button id='butt' onClick={() => setComponents("fourth")}> fourth</Button>
        </div>
        <div className="left">
            {components === "first" && <FormA/>}
            {components === "second" && <FormM/>}
            {components === "third" && <Creation/>}
            {components === "fourth" && <FormI/>}
        
        </div>
        </>
    );
}

export default Accounts;
