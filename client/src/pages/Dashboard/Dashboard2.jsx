import React, { Component, useEffect } from "react";
import Users from "../Users.jsx";
import axios from "axios";
import { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "../../Components/Nav/Nav.jsx";
import Test from "../test/Test.jsx";
import "./dashboard.css";

const Dashboard2 = () => {
  const isloggedin = useSelector((state) => state.isLoggedIn);
  console.log(isloggedin);

  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   window.location.reload(false);
  // }, []);

  return (
    <div id="container69">
      <div id="title">Welcome back {localStorage.getItem("username")}</div>
    </div>
  );
};

export default Dashboard2;
