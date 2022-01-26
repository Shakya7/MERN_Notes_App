const User = require("../models/userModel");
const jwt=require("jsonwebtoken");

exports.createUser=async (req,res)=>{
    try{
    const user=await User.create(req.body);
    const token=jwt.sign({id:user._id},"SECRET_k"); 
    res.cookie("jwt",token,{
        httpOnly:true
    })
    res.status(201).json({
        status:"success",
        data:{
            user,
            token
        }
    });
    
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}

exports.getAllUsers=async (req,res)=>{
    try{
    const users=await User.find().populate({
        path:"notes",
        select:"note -_id -user"
    });
    res.status(200).json({
        status:"success",
        result:users.length,
        data:{
            users
        }
    });
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}

exports.login=async (req,res)=>{
    try{
        const {email, password}=req.body;
        if(!email || !password)
            throw "Please provide email AND password";
        const user=await User.findOne({
            email,
            password
        })
        const token=jwt.sign({id:user._id},"SECRET_k"); 
        res.cookie("jwt",token,{
            httpOnly:true
        });
        console.log(user);
        if(!user)  
            throw "Please enter correct username or password";
    
        res.status(200).json({
            status:"success",
            data:{
                user,
                token
            }
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}

exports.protect=async (req,res,next)=>{
    try{
    let token;
    if(req.cookies.jwt)  
        token=req.cookies.jwt;
    const decoded=jwt.verify(token,"SECRET_k");
    console.log(decoded);
    const user=await User.findById({_id:decoded.id});
    if(!user)
        return next("User not found, please signup first");
    /*res.status(200).json({
        data:{
            user
        }
    })*/
    res.user=user;
    next();
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }

}
