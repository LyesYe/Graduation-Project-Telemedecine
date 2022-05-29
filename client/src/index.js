import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider , createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Context';



const theme = createTheme({
  typography: {
    fontFamily: [
      "Popins",
      "sans-serif"
    ].join(",")
  },
  button: {
    fontFamily: [
      "Popins",
      "sans-serif"
    ].join(",")
  }
  ,
  palette: {
    primary: {
       main: "#00D9A1" // This is an orange looking color
              },
    secondary: {
       main: "#000000" //Another orange-ish color
               }
          },


});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
  <Provider store={store}>
  <BrowserRouter>
  <ContextProvider>
    <App />
  </ContextProvider>
    </BrowserRouter>
    </Provider>
</ThemeProvider>

);

