import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider , createTheme } from '@mui/material/styles';



const theme = createTheme({
  typography: {
    fontFamily: [
      "Popins",
      "sans-serif"
    ].join(",")
  }
  ,
  palette: {
    primary: {
       main: "#03B575" // This is an orange looking color
              },
    secondary: {
       main: "#000000" //Another orange-ish color
               }
          },


});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>

);

