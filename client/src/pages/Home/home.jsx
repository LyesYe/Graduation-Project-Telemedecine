import React from "react";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from 'react-router-dom'
const Home = () => {
    //const history = useNavigate()
    const history = useNavigate();
    history('/login')
  return (
    <div>
      hi home
      <div className="buttonshome">
      
        
        <button onClick={() => window.location.href = '/login'}>login</button>

        <button onClick={() => window.location.href = '/register'}>sign up</button>
      </div>
    </div>
  );
};

export default Home;
