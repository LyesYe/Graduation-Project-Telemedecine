import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Home from "./pages/Home/home.jsx";
import SignInSide from "./pages/Login/Home2.jsx";
import AuthForm from "./pages/Login/AuthForm.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Test from "./pages/test/Test";
import Dashboard2 from "./pages/Dashboard/Dashboard2";
import ResponsiveAppBar from "./Components/Nav/Nav";
import Accounts from "./pages/NavPages/Accounts/Accounts";
import Hospitals from "./pages/NavPages/Hospitals/Hospitals";
import "./App.css";
import VideoCall from "./pages/videoCall/videoCall";
import axios from "axios";
import Pro from "./store/Protected";
import Pro2 from "./store/Protected2";
import Logout from "./pages/NavPages/Logout";
import Tele from "./pages/NavPages/Teleconsultations/Tele";
import JoinTele from "./pages/videoCall/JoinTele";
import MesRequetes from "./pages/NavPages/req/MesRequetes";
import FinalCall from "./pages/videoCall/FinalCall/FinalCall";

function App() {
  const isloggedin = useSelector((state) => state.isLoggedIn);
  console.log(isloggedin);

  useEffect(() => {
    if (localStorage.getItem('logi')==null ) {
      localStorage.setItem('logi','0')
    }
    console.log("object");

  }, []);

  console.log("hii"+localStorage.getItem("logi") != 0);

  return (
    <>
      <div className="nav">
        {(isloggedin != 0 ||
          (localStorage.getItem("logi") != 0 && localStorage.getItem("logi") != null ) && <ResponsiveAppBar />)}
      </div>
      <div className="rest">
        <Routes>
          {/* {isloggedin != 0 && (< Dashboard />) } */}
          {/* <AuthContext.Provider value={{authToken , setAuthToken :setToken , username , setUser_name}}> */}
          <Route path="/login" exact element={<AuthForm />} />
          {/* </AuthContext.Provider> */}

          <Route element={<Pro2 />}>
            <Route path="/" exact element={<AuthForm />} />
          </Route>

          <Route element={<Pro />}>
            <Route path="/dashboard" exact element={<Dashboard2 />} />
            <Route path="/dashboard/Test" exact element={<Test />} />
            <Route path="/Accounts" exact element={<Accounts />} />
            <Route path="/Hospitals" exact element={<Hospitals />} />
            <Route path="/Teleconsulation" exact element={<JoinTele />} />
            <Route path="/Teleconsultations" exact element={<Tele />} />
            <Route path="/MesRequetes" exact element={<MesRequetes />} />
            <Route path="/FinalCall" exact element={<FinalCall />} />
            <Route path="/Logout" exact element={<Logout />} />
            {/* <Route path="/Hospitals" exact element={<Hospitals />} /> */}

          </Route>

          <Route path="/register" exact element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
