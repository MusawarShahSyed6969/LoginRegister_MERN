import axios from 'axios';
import React,{useEffect , useState} from 'react'
import { useHistory , Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {Name,Email,ID} from "../feature/UserData"

import Navbar from '../components/Navbar';



// TEST


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import PrimarySearchAppBar from "../components/AppBar"




export const Dashboard = () => {

  const history = useHistory();

  const userName = useSelector(state => state.user.name)
  const userEmail = useSelector(state => state.user.email)
  const userid = useSelector(state => state.user.id)


  const dispatch = useDispatch()

  const [Data , setData] = useState()

  const [isError, setisError] = useState(false)
  const [ResMessage, setResMessage] = useState("")


  const [UserPasswords, setUserPasswords] = useState([])

  useEffect(() =>  {
    
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }

    CheckAuth()

  },[])

  const reduxtut = (givenName,givenEmail,givenId) => {
    dispatch(Name(givenName))
    dispatch(Email(givenEmail))
    dispatch(ID(givenId));

    

  }

  const CheckAuth = async () => {

    const res = await axios.get("http://192.168.100.206:8000/api/user/dashboard", {
      headers:{
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
      }
    })
    .then(res => {

      if(res.data.stats == "ok"){
        setData(res.data.data);
        setisError(true)
        setResMessage(res.data.message)
       
        console.log(res.data.message);


        // console.log(res.data.Userpasswords);

        reduxtut(res.data.data.name, res.data.data.email , res.data.data.id , res.data.data.id );
              

        
  
      }else{
        localStorage.removeItem("token");
        history.push("/login");
      }
      
    })

    

    

  

  }

  const Handlelogout = () => {
    localStorage.removeItem("token");
    history.push("/login")

  }

  const HandleGetPasswords = async (event) => {
    event.preventDefault();

    const res = await axios.get("http://192.168.100.206:8000/api/user/dashboard", {
      headers:{
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
      }
    })
    .then(res => {

      if(res.data.stats == "ok"){
        
        setUserPasswords(res.data.Userpasswords)
        console.log(UserPasswords);

      }
      
    })

    
    

   

  }
  

  return (
<div>
{/* <Navbar userName={userName} logoutHandle={Handlelogout} userNameShow={true} LogoutShow={true}  /> */}

<PrimarySearchAppBar/>

    <button onClick={HandleGetPasswords} >Get Passwords</button>

    <Grid container spacing={2} >
      <Grid  style={{backgroundColor:"violet"}}  item xs={3}>
           Hi    3
      </Grid> 
    </Grid>


    {UserPasswords.map(user => 
    
    <Grid container spacing={2} >
      
 
  

      
 <Card sx={{ minWidth: 275 }}>

 <Grid  style={{backgroundColor:"violet"}}  item xs={3}>
         Hi    3
    </Grid> 
      <CardContent>
      
       <Typography>{user.platform}</Typography>
       <Typography>{user.platEmail}</Typography>
       <Typography>{user.password}</Typography>


      </CardContent>
      
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card> 

    </Grid>

    )}

    
    {/* {UserPasswords.map(user => 
    


      
<Card sx={{ minWidth: 275 }}>
      <CardContent>
      
       <Typography>{user.platform}</Typography>
       <Typography>{user.platEmail}</Typography>
       <Typography>{user.password}</Typography>


      </CardContent>
      
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>


    )} */}

    


</div>
  )
}
