import React from 'react'
import { useHistory , Link} from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
    
    
        <div className="flex bg-black h-16 NavHead justify-between ">
    
        <div className='Navbar'>
    
          <img src="../../public/logo192.png" className='logo mt-2 px-4 absolute' alt="LOGO" />
    
            <ul className='flex px-32'>
              <li className='px-4 mt-2 text-white hover:opacity-80' > <a href="#">Home</a> </li>
              <li className='px-4 mt-2 text-white hover:opacity-80' > <a href="#">Settings</a> </li>
              {/* <li className='px-4 mt-2 text-white hover:opacity-80' > <a href="#">Donate</a> </li> */}
              <li className='px-4 mt-2 text-white hover:opacity-80' > <a href="#">Add Password</a> </li>
            </ul>
    
        </div>
    
    
       <div className='name&Logout flex '>

       {props.userNameShow ? 
        
       <div>
          <p className='mt-2 px-6  text-white'>Welcome : { props.userName}</p>
        </div>

        : null}

      {props.LogoutShow ? 
      
      <div className='mt-2 px-4'>
      <Link onClick={props.logoutHandle} className='text-white border-gray-50 border rounded-full p-1 hover:border-gray-500'>Logout</Link>
      </div>
      
      
      : null}


      {props.RegLogButton ? 
      
      <div className='mt-2  px-6 '>
        <Link to={"/register"} onClick={props.logoutHandle} className='text-white border-gray-50 border rounded-full p-1 px-4   hover:border-gray-500'>Register</Link>
      <Link to={"/login"} onClick={props.logoutHandle} className='text-white border-gray-50 border rounded-full p-1 px-4  hover:border-gray-500'>Login</Link>
      </div>
      
      : 12}


       </div>
    
        </div>
    
       </div>
  )
}

export default Navbar