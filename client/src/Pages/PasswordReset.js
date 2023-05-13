import React ,{useEffect , useState} from 'react'
import axios from "axios";
import { useHistory , Link } from "react-router-dom";
import { Alert, Box, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormResponseError, FromHeaderText, SubmitButton, SubmitButtonDiv } from '../Style/BasicStyles';

const PasswordReset = (params) => {

  const history = useHistory();
  
  const [isError, setisError] = useState(false)
  const [errorMessage, seterrorMessage] = useState("")

  const [isSuccess, setisSuccess] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState("");

  const [Data, setData] = useState([])

  const [userPassword, setuserPassword] = useState("")

 const ResetTokenID = params.match.params.id;

  const HandleInput = async (event) => {
    event.preventDefault();
  
    await axios.put(`http://192.168.100.206:8000/api/user/resetpassword/${ResetTokenID}`, {
      password: userPassword,
    })
    .then(function (response) {
      console.log(response);
  
      setData(response.data)
  
      if (response.data.stats == "error") {
        setisError(true)
        setisSuccess(false)

      }else{
        setisSuccess(true)
        setSuccessMessage(response.data.message)
        setisError(false)

      }
  
    //   else{
    //     localStorage.setItem("token",response.data.token)
    //     history.push("/dashboard")
    //   }
  
      
    })
    .catch(function (error) {
     console.log(error.response.data);
     setisError(true)
     seterrorMessage(error.response.data.message)
    });
  }
  
  return (
    <div className="flex main_div  h-screen bg-white">
    <div className="form_div m-auto pt-14">
      {/* Main Header Text  */}

      <Typography
        variant="h3"
        style={{ marginBottom: "50px" }}
        component="h2"
      >
        {" "}
        <FromHeaderText>Reset Your Password</FromHeaderText>{" "}
      </Typography>

      {/* Error Responses Alert  */}

      <Typography variant="p" component="h2" color={isError && "red"}>
        {" "}
        <FormResponseError Error={isError}>
          {" "}
          {isError ? <Alert severity="error">{errorMessage}</Alert> : isSuccess && <Alert severity="success">{SuccessMessage}</Alert>}
        </FormResponseError>{" "}
      </Typography>

      {/* FORMS */}

      <form onSubmit={HandleInput} className="register_form" method="post">
        {/* Input Fields  */}

        <TextField
          id="outlined-basic"
          onChange={(e) => setuserPassword(e.target.value)}
          value={userPassword}
          color={isError && "error"}
          label="Enter Your New Password"
          variant="outlined"
        />
        <br />

   

        {/*  Submit Button   */}

        <SubmitButtonDiv>
          <Box component="span">
        
            <SubmitButton
              type="submit"
              size="large"
              endIcon={<SendIcon />}
              variant="contained"
              // sx={{backgroundColor:theme.colors.main }}
              color="primary"
              
              
            >
              Change Password
            </SubmitButton>
         
          </Box>
        </SubmitButtonDiv>

       
      </form>
 
    </div>
  </div>
  )
}

export default PasswordReset