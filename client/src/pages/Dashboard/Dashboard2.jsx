import React,{Component} from 'react';
import Users from '../Users.jsx'
import axios from 'axios';
import { useState } from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ResponsiveAppBar from '../../Components/Nav/Nav.jsx';
import Test from '../test/Test.jsx';


const Dashboard2 = () => {

	const isloggedin = useSelector ((state) => state.isLoggedIn);
	console.log(isloggedin)



	const [value, setValue] = useState(0);

    return (
		 <>
      
      {/* <ResponsiveAppBar/> 
      
      <Routes>
            
            <Route path="/dashboard/Test" exact element={< Test />} />
        </Routes>
       */}
  
    </>
    );






}

export default Dashboard2;
