import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "../App.css";
import { TextField, Typography, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import styled from "styled-components";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {theme} from "../Style/Themes"


// STYLE

import {
  FormResponseError,
  FromHeaderText,
  SubmitButtonDiv,
  SubmitButton,

} from "../Style/BasicStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginScreen() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/dashboard");
    }
  }, []);

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const [isError, setisError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const [Data, setData] = useState([]);

  const [showPassword, setShowPassword] = React.useState(false);

  const HandleInput = async (event) => {
    event.preventDefault();

    await axios
      .post("http://192.168.100.206:8000/api/user/login", {
        email: userEmail,
        password: userPassword,
      })
      .then(function (response) {
        console.log(response);

        setData(response.data);
        if (response.data.stats == "error") {
          setisError(true);
          seterrorMessage(response.data.message);
        } else {
          localStorage.setItem("token", response.data.token);

          history.push("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    // flex main_div  h-screen bg-white
    <div className="flex main_div  h-screen bg-white">
      <div className="form_div m-auto pt-14">
        {/* Main Header Text  */}

        <Typography
          variant="h3"
          style={{ marginBottom: "50px" }}
          component="h2"
        >
          {" "}
          <FromHeaderText>Login Your Account</FromHeaderText>{" "}
        </Typography>

        {/* Error Responses Alert  */}

        <Typography variant="p" component="h2" color={isError && "red"}>
          {" "}
          <FormResponseError Error={isError}>
            {" "}
            {isError && <Alert severity="error">{errorMessage}</Alert>}
          </FormResponseError>{" "}
        </Typography>

        {/* FORMS */}

        <form onSubmit={HandleInput} className="register_form" method="post">
          {/* Input Fields  */}

          <TextField
            id="outlined-basic"
            onChange={(e) => setuserEmail(e.target.value)}
            value={userEmail}
            color={isError && "error"}
            label="Enter Your Email"
            variant="outlined"
          />
          <br />

          <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Passwords</InputLabel>
          <OutlinedInput
             onChange={(e) => setuserPassword(e.target.value)}
             value={userPassword}
            color={isError && "error"}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                 
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Passwordss"
          />
        </FormControl>

          {/*  Submit Button   */}

          <SubmitButtonDiv>
            <Box component="span">
          
              <SubmitButton
                type="submit"
                size="large"
                endIcon={<LockOpenIcon />}
                variant="contained"
                // sx={{backgroundColor:theme.colors.main }}
                color="primary"
                
                
              >
                Login Me
              </SubmitButton>
           
            </Box>
          </SubmitButtonDiv>

         
        </form>
   
      </div>
    </div>
  );
}

export default LoginScreen;
