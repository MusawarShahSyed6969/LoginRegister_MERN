import React , {useState , useEffect} from 'react'
import axios from 'axios';
import { useHistory , Link } from "react-router-dom";
import { Alert, Box, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormResponseError, FromHeaderText, SubmitButton, SubmitButtonDiv } from '../Style/BasicStyles';


const ForgetPassowrd = () => {

    const history = useHistory();

    useEffect(() =>  {
      
      if (localStorage.getItem("token")) {
        history.push("/dashboard");
      }
  
  
    },[])
  
  
    
  const [userEmail, setuserEmail] = useState("")
  const [userPassword, setuserPassword] = useState("")
  
  const [isError, setisError] = useState(false)
  const [errorMessage, seterrorMessage] = useState("")

  const [isSuccess, setisSuccess] = useState(false)
  const [successMessage, setsuccessMessage] = useState("")
  
  
  const [Data, setData] = useState([])
  
  
  const HandleInput = async (event) => {
    event.preventDefault();
  
  await  axios.post('http://192.168.100.206:8000/api/user/forgetpassword', {
      email: userEmail,
    })
    .then(function (response) {
      console.log(response);
  
      setData(response.data)
  
   
        setisSuccess(true)
        setsuccessMessage(response.data.message)
        setisError(false)
      

  
      
    })
    .catch(function (error) {
     console.log(error.response.data);
     console.log("catch");

     setisError(true)
     seterrorMessage(error.response.data.message)
     
    });
  }

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
         <FromHeaderText>Reset Your Password</FromHeaderText>{" "}
       </Typography>

       {/* Error Responses Alert  */}

       <Typography variant="p" component="h2" color={isError && "red"}>
         {" "}
         <FormResponseError Error={isError}>
           {" "}
           {isError ? <Alert severity="error">{errorMessage}</Alert> : isSuccess && <Alert severity="success">Successfully Email Sent</Alert>}
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
               Send Email
             </SubmitButton>
          
           </Box>
         </SubmitButtonDiv>

        
       </form>
  
     </div>
   </div>
  )
}

export default ForgetPassowrd