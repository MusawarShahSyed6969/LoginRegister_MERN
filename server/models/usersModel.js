const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        maxLength: 24
        
    },
    email: {
        type:String,
        required:true,
        unique:[true , "User Already Exists"]
    },
    password: {
        type: String,
        required: true,
   
    },
    verified:{
      type:String,
      default : false
    },
    banned:{
      type:String,
      default : false
    },
    role:{
      type:String,
      required:false,
      default : "user"
    },
    Userpasswords: [
      {
          password: {
              type: String,
              required: true,
              default:"123",
          },
          platform: {
              type: String,
              required: true,
              default:"Netflix",
          },
          platEmail: {
              type: String,
              required: true,
              default:"test@Netlifx.com",
          }
      }
  ],

    // User Register Verification
    verifyUserToken:String,
    VerifyTokenExpire:Date,

    // Reset Password Reset 
    resetPasswordToken:String,
    resetPasswordExpire:Date
    
    
  },

  { timestamps: true }

  );



  userSchema.methods.GetUserVerificationCode = function(){

    const verifyToken = crypto.randomBytes(20).toString("hex");

    this.verifyUserToken = crypto.createHash("sha256").update(verifyToken).digest("hex");
    this.VerifyTokenExpire = Date.now() + 10 * (60*1000);
    return verifyToken;
  }


  userSchema.methods.GetResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * (60*1000);
    return resetToken;
  }

  userSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        next()
    }

    this.password = await bcrypt.hash(this.password,10)

    next();
  })

  userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
  }


  userSchema.methods.addNewPassword = async function (userPassword,  UserPlatform, UserEmail)
{
    try
    {
        this.Userpasswords = this.Userpasswords.concat({ password: userPassword, platform: UserPlatform, platEmail: UserEmail });
        await this.save();
        return true;
    }
    catch (err)
    {
        console.log(err);
        return false;
    }
}

  const UserModel = mongoose.model('user', userSchema);

  module.exports = UserModel