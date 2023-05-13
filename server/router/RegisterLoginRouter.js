const express = require("express");
const router = express.Router();

const {RegisterController , LoginController  ,ForgetPassword , ResetPassword,UserVerification} = require("../controller/RegisterLoginController");

const {DashboardController,AddNewPassword , EditPassword , DeletePassword} = require("../controller/UserPasswordsController")

const ProtectRoutes = require("../middlewares/Auth")



router.post("/register" , RegisterController);

router.post("/login" , LoginController);

router.post("/forgetpassword" , ForgetPassword);

router.put("/resetpassword/:resetToken" , ResetPassword);

router.put("/userverification/:verifyToken",UserVerification)


// PROTECTED ROUTES

router.get("/dashboard",ProtectRoutes,DashboardController)

router.post("/dashboard",ProtectRoutes,AddNewPassword)

router.put("/dashboard/:passwordID",EditPassword)

router.delete("/dashboard/:passwordID",DeletePassword)

















module.exports = router;