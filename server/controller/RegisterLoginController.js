const UserModel = require("../models/usersModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SendMail = require("../utils/SendEmail")
const crypto = require("crypto");

async function RegisterController(req, res) {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ message: "Pleace Fill all Fields", stats: "error" });
        }

        const newUser = await UserModel.create({
            name,
            email,
            password
        });

        
        
        const verifyToken = newUser.GetUserVerificationCode();

        console.log(verifyToken +  " - verify Code Real");

       
        const verifyUrl = `http://192.168.100.206:3000/verify/${verifyToken}`

        const message = `
        <h1> Pleace Verify Your Account </h1>
        <p> Pleace Go To Verfification Page To Verify </p>
        <a href=${verifyUrl} clicktracking=off> ${verifyUrl}
        `;


            await SendMail({
                to:newUser.email,
                subject:"Verification Request",
                text:message
            });

            await newUser.save()
            res.json({ message: "Success Created Account Pleace Verify Now", User: newUser });
            
       


    } catch (error) {
        res.json({ message: "Internal Server Error", stats: "error" })
        console.log(error.message);
    }
}

const LoginController = async (req, res) => {

        console.log("Login " + req.body.email);

    try {

        const { email, password } = req.body;


        if (!email || !password) {
            console.log("2");
            return res.json({ message: "Pleace Fill all Fields", stats: "error" });
        }

        console.log(email , password);



        const user = await UserModel.findOne({ email:email })

        if (user) {
            console.log("5");
            const result = await user.matchPassword(password);
            console.log(result +" " + user);
                if (result) {

                    if(user.verified == "false"){
                        console.log(user);
                        return res.json({ message: "Pleace Verify Your Email Address", stats: "error" ,verified:"false" })
                    }

                    if(user.banned == "true"){
                        console.log(user);
                        return res.json({ message: "Your Account Has Been Banned", stats: "error"})
                    }

                    const token = jwt.sign({
                        email: req.body.email,
                        id: user._id , name : user.name,
                    }, process.env.SECRET_KEY);

                    res.json({ message: "Success Login", stats: "success", token , UserPassword:user.Userpasswords,name:user.name})
                } else {
                    res.json({ message: "Email or Password is incorrect Pleace Try Again", stats: "error" })
                }
          

        }else{
            res.json({ message: "Email or Password is incorrect Pleace Try Again", stats: "error" })
        }
    } catch (error) {
        console.log(error);
       return res.json({ message: "Error While Login", stats: "error" })
    }


}



const ForgetPassword = async (req, res) => {
    const { email } = req.body;

    try {

        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "Email Could Not be Sent" , stats:"error"})
        }

        const resetToken = user.GetResetPasswordToken();


        await user.save()

        const resetUrl = `http://192.168.100.206:3000/passwordreset/${resetToken}`;

        const message = `
        <h1> You Have Requested a Password Reset </h1>
        <p> Pleace Go To This Link to Reset a Password </p>
        <a href=${resetUrl} clicktracking=off> ${resetUrl}
        `;

        console.log(resetUrl);

        try {

            // await SendMail({
            //     to:user.email,
            //     subject:"Password Reset Request",
            //     text:message
            // });

            res.status(200).send({message:"Email Sent",stats:"ok"})
            
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save()

           return res.status(500).send({message:"Email Could Not Be Sent",stats:"error"})
        }

    } catch (error) {
        console.log(error);
    }

}


const UserVerification = async (req,res) => {

    const userVerificationToken = crypto.createHash("sha256").update(req.params.verifyToken).digest("hex");

    console.log(userVerificationToken + " verify Token");


    const user = await UserModel.findOne({verifyUserToken:userVerificationToken ,  VerifyTokenExpire:{$gt:Date.now()}})


    if(!user){
        
        return res.status(400).send({message:"Inavlid Verification Code",stats:"error"})

    }else{



        user.verified = "true";
        user.verifyUserToken = undefined;
        user.VerifyTokenExpire = undefined;

        await user.save();
        res.status(201).send({message:"User Verified Success",stats:"ok"})

    }


}

const ResetPassword = async (req, res) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try {
        const user = await UserModel.findOne({resetPasswordToken, resetPasswordExpire:{$gt:Date.now()}})

        if(!user){
            console.log("Reset Password Log"+user);
            return res.status(400).send({message:"Inavlid Reset Token",stats:"error"})
            
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

         res.status(201).send({message:"Password Reset Success",stats:"ok"})
    } catch (error) {
        return res.status(400).send({message:"Error in Password Changing",stats:"error"})
    }
}


module.exports = { RegisterController, LoginController, ForgetPassword, ResetPassword , UserVerification }