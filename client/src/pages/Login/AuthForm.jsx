import * as React from 'react';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './authForm.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import HealingIcon from '@mui/icons-material/Healing';




const AuthForm = () => {

  const dispatch = useDispatch();

  const history = useNavigate();

	const [inputs, setinputs] = useState({
    username:"",
    password:""
  });

  

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(inputs);
    //send http request

    const data = sendRequest();
  };


  const sendRequest = async () => {
    const res = await axios.post('http://localhost:3001/auth/login',{
      username: inputs.username,
      password: inputs.password,
    }).catch(err => console.log(err));

    const data = await res.data;

    console.log(data.kind)
    console.log(res.status);
    console.log(data);


    if (res.status == 201) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data._id);
      localStorage.setItem('username', data.username);
      // dispatch(authActions.type())

      switch(data.kind) {
        case "admin":
          dispatch(authActions.loginAdmin())
          localStorage.setItem('logi', 1);
          break;
        case "medecin":
          dispatch(authActions.loginMedecin())
          localStorage.setItem('logi', 2);
          break;
        case "infirmier":
          dispatch(authActions.loginInfirmier())
          localStorage.setItem('logi', 3);
          break;
        case "patient":
          dispatch(authActions.loginPatient())
          localStorage.setItem('logi', 4);
          break;
        default:
        console.log("faulttttt")
      }


			alert('Login successful')
      history('/dashboard')
      window.location.reload(false);
		} else {
			alert('Please check your username and password')
		}


    return data;
  }

  const handleChange = (e) => {
    setinputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name,"value", e.target.value);
  }

  
    return (
        <StyledEngineProvider injectFirst>
      <Grid container  className="ConBig" component="main" sx={{ height: '100vh' }}>
        
        <Grid item xs={12} sm={8} md={6.5} component={Paper} elevation={6} square>
          

      <div className="flex">
      <div className="up">
      <h2>MyDecine</h2>
      <HealingIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          </div>

          <Box
          className='biggrid'
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography className='welcome' component="h1" variant="h4">
             Welcome Back
            </Typography>
            <Typography className='login'  component="h2" variant="h5">
            Login into your account
            </Typography>

            <Box  className='boxForm'  sx={{ mt: 6 }}>
              <form onSubmit={handleSubmit} >

              <div className="log">
              <TextField
                margin="normal"
                required
                style ={{width: '100%'}}
                id="username"
                value={inputs.username}
					      onChange={handleChange}
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              </div>

              <div className="log">
              <TextField
                
                margin="normal"
                required
                style ={{width: '100%'}}
                value={inputs.password}
					      onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              </div>
                <FormControlLabel
                  className="remember"
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                 
                />
                
               <Button
                className="button"
                type="submit"
                fullWidth
                // onClick = {() => log()}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
               </Button >
                
              
              
              <Grid container>
                <Grid item xs>
                  <Link color='secondary' href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                
              </Grid>
              </form>
            </Box>
          

            

          </Box>
      </div>

          
        
        </Grid>
        <Grid
        className='picgrid'
          item
          xs={false}
          sm={4}
          md={5.5}
          sx={{
            backgroundImage: `url("doc2.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      </StyledEngineProvider>
    );
}

export default AuthForm;
