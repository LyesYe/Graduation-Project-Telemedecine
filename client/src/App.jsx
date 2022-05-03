
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




function App() {

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
    <div>

      <BrowserRouter>
      <Routes>
            <Route path="/" exact element={< Home />} />
            {/* <AuthContext.Provider value={{authToken , setAuthToken :setToken , username , setUser_name}}> */}
              <Route path="/login" exact element={<AuthForm />} />
            {/* </AuthContext.Provider> */} 


            <Route path="/register" exact element={< Register />} />
            <Route path="/dashboard" exact element={< Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
