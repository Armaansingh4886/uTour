import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';

export const verifyemail = async (req,res)=>{
  console.log(req.params.id);
  if(!! await User.findById(req.params.id)){
  await User.updateOne({"_id":req.params.id}, {$set:{verified:true}})
  
  res.status(200).json({ success: true, message: "successfully created" });}else{
    res
      .status(500)
      .json({ success: false, message: "wrong url verify your link"});
  }
}


export const register = async (req, res) => {
  try {
    
    //hashing passwords
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
// console.log(req.body.username)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      // photo: req.body.photo,
    });

    
    // console.log(newUser);
    console.log(!!await User.findOne({"email":newUser.email},{"username":newUser.username}));
    if(!!await User.findOne({"email":newUser.email},{"username":newUser.username})){
      res
      .status(409)
      .json({ success: false, message: "username/email already exists"});
    }else{
    const user = await newUser.save();
const userid = user._id.valueOf();
console.log(user.email)







var transport = nodemailer.createTransport({
 
  service:"gmail",
  port: 2525,
  auth: {
    user: "armaansingh40132018@gmail.com",
    pass: "irzr eslh qmeu zcao"
  }
});

﻿transport.verify(function(error, success) {
  if (error) {
        console.log(error);
  } else {
        console.log('Server is ready to take our messages');
  }
});
var mailOptions = {
  from: `"uTour" <${user.email}>`,
  to: `${user.email}`,
  subject: 'Verify Your uTour account',
  text: 'Hey there, it’s mail to verify your registerd email on uTour ',
  html: `<b>Hey there! </b><br> An account is registered with this email on uTour. <a href="http://localhost:3000/verifyemail?id=${userid}">Click Here</a> to verify your email`
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});











    res.status(200).json({ success: true, message: "successfully created" });




  







  } }catch(err) {
    // console.log(err)
    res
      .status(500)
      .json({ success: false, message: "failed to register",error: error});
  }
};

export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ sucess: false, message: "No user found" });
    }
    if(!user.verified){
      return res.status(401).json({success:false,message: "Verify email first"})
    }
    const checkCorrectPassword =await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }
    const { passsword, role, ...rest } = user._doc;

    console.log(user);


    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "successfully login",
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to login", });
  }
};
