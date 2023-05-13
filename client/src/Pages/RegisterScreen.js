import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Box from "@mui/material/Box";
import {theme} from "../Style/Themes"
import {FormResponseError , FromHeaderText ,SubmitButtonDiv,SubmitButton} from "../Style/BasicStyles"
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const RegisterScreen = () => {
  const history = useHistory();

  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const [isError, setisError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const [isSuccess, setisSuccess] = useState(false);

  const [Data, setData] = useState([]);

  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {}, []);

  const HandleInput = async (event) => {
    event.preventDefault();


    await axios
      .post(
        "http://192.168.100.206:8000/api/user/register",
        {
          name: userName,
          email: userEmail,
          password: userPassword,
        },
        {
          headers: {
            // Authorization : `Bearer ${localStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);

        if (response.data.stats == "error") {
          setisSuccess(false);
          setisError(true);
          seterrorMessage(response.data.message);
        } else {
          setisSuccess(true);
          setisError(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="flex main_div  h-screen bg-white">
      <div className="form_div m-auto pt-14">
        <h1 className="px-20 py-4"></h1>

        {/* Main Header Text  */}

        <Typography
          variant="h3"
          style={{ marginBottom: "50px" }}
          component="h2"
        >
          {" "}
          <FromHeaderText >Register Your Account</FromHeaderText>{" "}
        </Typography>

        {/* Error Responses Alert  */}

        <Typography variant="p" component="h2" color={isError && "red"}>
          {" "}
          <FormResponseError Error={isError}>
            {" "}
            {isError ? 
              <Alert severity="error">{errorMessage}</Alert>
             : isSuccess &&  
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="success">
                  Pleace Verify Your Email Address
                </Alert>
              </Stack>
            } 
          </FormResponseError>{" "}
        </Typography>

        {/* FORMS  */}

        <form onSubmit={HandleInput} className="register_form" method="post">
          <TextField
          size="medium"
            id="outlined-basic"
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
            color={isError && "error"}
            label="Enter Your Name"
            variant="outlined"
          />
          <br />

          {/* Input Fields  */}

          <TextField
            style={{fontSize:"500rem"}}
            id="outlined-basic"
            onChange={(e) => setuserEmail(e.target.value)}
            value={userEmail}
            color={isError && "error"}
            label="Enter Your Email"
            variant="outlined"
          />
          <br />

                {/* Input With Passwords Show Setup Fields  */}

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
                endIcon={<HowToRegIcon />}
                variant="contained"
                
              >
                {" "}
                Register{" "}
              </SubmitButton>

            </Box>
          </SubmitButtonDiv>
        </form>
      </div>
    </div>
  );
};

