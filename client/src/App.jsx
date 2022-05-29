
import './App.css';
import React from 'react'
import {BrowserRouter ,
  Routes,
  Route,
  Link} from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Home from './pages/Home/home.jsx'
import SignInSide from './pages/Login/Home2.jsx'
import AuthForm from './pages/Login/AuthForm.jsx'
import { useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import Test from './pages/test/Test';
import Dashboard2 from './pages/Dashboard/Dashboard2';
import ResponsiveAppBar from './Components/Nav/Nav';
import Accounts from './pages/NavPages/Accounts/Accounts';
import Hospitals from './pages/NavPages/Hospitals/Hospitals';
import './App.css'
import VideoCall from './pages/videoCall/videoCall';





function App() {


  const isloggedin = useSelector ((state) => state.isLoggedIn);
  console.log(isloggedin)


  // const existingToken = localStorage.getItem("token") || "";
  // const existingUsername = localStorage.getItem("username") || "";
  // const [authToken, setAuthToken] = useState('existingToken');
  // const [username, setUsername] = useState('existingUsername');


  // const setUser_name = (data) => {
  //   if (!data){
  //     localStorage.removeItem('username');
  //     setUsername();
  //   }else{
  //     localStorage.setItem('username',data);
  //     setUsername(data);
  //   }
  // }


  // const setToken = (data) => {
  //   if (!data){
  //     localStorage.removeItem('token');
  //     setAuthToken();
  //   }else{
  //     localStorage.setItem('token',JSON.stringify(authToken));
  //     setAuthToken(data);
  //   }
  // }

  return (
    <>
      <div className="nav">

      {isloggedin !==0 && <ResponsiveAppBar/> }
      
      </div>
      <div className="rest">

      <Routes>
            {/* {isloggedin != 0 && (< Dashboard />) } */}
            <Route path="/" exact element={< AuthForm />} />
            {/* <AuthContext.Provider value={{authToken , setAuthToken :setToken , username , setUser_name}}> */}
            <Route path="/login" exact element={<AuthForm />} />
            {/* </AuthContext.Provider> */} 

            <Route path="/register" exact element={< Register />} />
            <Route path="/dashboard" exact element={< Dashboard2 />} />
            <Route path="/dashboard/Test" exact element={< Test />} />
            <Route path="/Accounts" exact element={< Accounts />} />
            <Route path="/Hospitals" exact element={< Hospitals />} />
            <Route path="/Teleconsulation" exact element={< VideoCall />} />
        </Routes>
      
      </div>
  
    </>
  );
}

export default App;
