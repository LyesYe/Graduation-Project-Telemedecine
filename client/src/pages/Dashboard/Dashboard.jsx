import React,{Component} from 'react';
import Users from '../Users.jsx'
import axios from 'axios';
import { useState } from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Dashboard = () => {

	const isloggedin = useSelector ((state) => state.isLoggedIn);
	console.log(isloggedin)

	const [user, setUser] = useState('')

	const getUsers = () => {
		axios.get("http://localhost:3001/user/",{
			headers : {
	   Authorization:'Bearer '+localStorage.getItem('token')
		}
	   }).then((res)=>{
			console.log(res.data);
			console.log(res.data[0].email);
			setUser(res.data[0].email)
		})
	}


	// return (
	// 	<div>
	// 		<button onClick={getUsers}>Get users</button>
	// 		   {/* <Users id={4} name="Charmander" type="fire" base_experience={62} /> */}
	// 		   {user}
	// 	</div>
	// );

	const [value, setValue] = useState(0);

    return (
		<div>
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h3">Welcome</Typography>
                <Box sx={{ marginLeft: 'auto' }}>
                    <Tabs
                        onChange={(e, val) => setValue(val)}
                        value={value}
                        textColor="inherit"
                        indicatorColor="secondary"
                    >
                     {isloggedin &&   <Tab to="/logout" LinkComponent={Link} label="logout" />}
                        <Tab to="/login" LinkComponent={Link} label="login" />
                        <Tab to="/login" LinkComponent={Link} label="login" />
                        <Tab to="/login" LinkComponent={Link} label="login" />
                        <Tab to="/login" LinkComponent={Link} label="login" />
                        <Tab to="/login" LinkComponent={Link} label="login" />
                        
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
		</div>
    );






}

export default Dashboard;
