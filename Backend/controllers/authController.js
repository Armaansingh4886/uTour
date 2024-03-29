import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



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
    await newUser.save();

console.log("e")
    res.status(200).json({ success: true, message: "successfully created" });
  } }catch(err) {
    // console.log(err)
    res
      .status(500)
      .json({ success: false, message: "failed to register"});
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
