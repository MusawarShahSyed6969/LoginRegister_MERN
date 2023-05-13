import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./Style/Mui/Theme"
import {GlobalStyle} from "./Style/GlobalStyle"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

  <GlobalStyle/>
  <ThemeProvider theme={theme}>

     <App /> 

     </ThemeProvider>

    
  </React.StrictMode>


);

