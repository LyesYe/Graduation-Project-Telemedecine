import React,{Component} from 'react';
import Users from '../Users.jsx'
import axios from 'axios';
import { useState } from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const link = "https://pfe-back-ye.herokuapp.com/";


const Dashboard = () => {

	const isloggedin = useSelector ((state) => state.isLoggedIn);
	console.log(isloggedin)

	const [user, setUser] = useState('')

	const getUsers = () => {
		axios.get( `${link}user/`,{
			headers : {
	   Authorization:'Bearer '+localStorage.getItem('token')
		}
	   }).then((res)=>{
			console.log(res.data);
			console.log(res.data[0].email);
			setUser(res.data[0].email)
		})
	}



	const [value, setValue] = useState(0);

    return (
		<div>
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h3">Welcome  {isloggedin} </Typography>
                <Box sx={{ marginLeft: 'auto' }}>
                    <Tabs
                        onChange={(e, val) => setValue(val)}
                        value={value}
                        textColor="inherit"
                        indicatorColor="secondary"
                    >


                     {isloggedin !== 0 &&   <Tab to="/logout" LinkComponent={Link} label="logout" />}
                     <Tab to="/test" LinkComponent={Link} label="test" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
		</div>
    );






}

export default Dashboard;
