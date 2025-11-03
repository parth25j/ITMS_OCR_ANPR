import createHttpError from "http-errors";
import User from "./userModel.js";
// import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { config } from "../config/config.js";


const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(createHttpError(400, "Some fields are missing"));
    }
    const existingUser = await User.getByEmail(email);
    const hashedPassword = await bcrypt.hash(password, 10);
    if (existingUser) {
      return next(createHttpError(400, "user already exits"));
    }
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
        {id:newUser.id,email:newUser.email},
        config.JWT_TOKEN,
        {expiresIn:'7d'}
       
    )
    res.status(201).json({
      name: newUser.name,
      password: newUser.password,
      email: newUser.email,
      token
    });
  } catch (error) {
    next(error, " register user error");
  }
};

const loginUser = async(req,res,next) =>{
  try {
    const {email,password} = req.body
    if ( !email || !password) {
        return next(createHttpError(400, "Some fields are missing"));
      }
    const user = await User.getByEmail(email)  
    if(!user){
        return next(createHttpError(404,"user not found"))
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return next(createHttpError(400,"invalid password"))
    }
    const token = jwt.sign(
        {id:user.id,email:user.email},
        config.JWT_TOKEN,
        {expiresIn:'7d'}
       
    )

    res.status(200).json({
        username:user.name,
        email:email,
        token
    })


  } catch (error) {
    next(error,"failed login")
  }


}

export { registerUser,loginUser };






// {
//   "name":"admin",
//   "email":"admin@admin.com",
//   "password":"admin123"
// }