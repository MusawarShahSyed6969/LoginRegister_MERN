// const SavedPasswordsModel = require("../models/savedPasswordsModel");
const UserModel = require("../models/usersModel");



const DashboardController = async (req, res) => {

  try {

    const User = await UserModel.findOne({email:req.user.email})

    if(!User){
      return res.status(400).json({ error: "Not Found " })
    }
  
    console.log(User.Userpasswords);



      res.json({ message: "Success", stats: "ok", data: req.user , Userpasswords:User.Userpasswords})

  } catch (error) {
      if (error) {
          res.json({ message: "Invalid Token", stats: "error" })
          console.log(error);
      }
  }
}


const AddNewPassword = async (req,res) => {

  const {platform, email , password} = req.body;



  const User = await UserModel.findOne({email:req.user.email})

  if(!User){
    return res.status(400).json({ error: "Not Found " })
  }

  console.log(User);




const isSaved = await User.addNewPassword(password,platform,email)

if (isSaved)
{
    return res.status(200).json({ message: "Successfully added your password." })
}
else
{
    return res.status(400).json({ error: "Could not save the password." })
}
 

  return  res.json({stats:"Success Add New",User:rootUser})
}

const EditPassword = async (req,res) => {
  return  res.json({stats:"Success Edit"})
}
const DeletePassword = async (req,res) => {
  return  res.json({stats:"Delete"})
}



module.exports = {AddNewPassword , EditPassword ,DeletePassword , DashboardController};