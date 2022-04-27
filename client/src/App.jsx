
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



function App() {

  return (
    <div>

      <BrowserRouter>
      <Routes>
            <Route path="/" exact element={< Home />} />
            <Route path="/login" exact element={< Login />} />
            <Route path="/register" exact element={< Register />} />
            <Route path="/dashboard" exact element={< Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
