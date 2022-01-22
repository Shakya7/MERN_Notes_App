const User = require("../models/userModel");

exports.createUser=async (req,res)=>{
    try{
    const user=await User.create(req.body);
    res.status(201).json({
        status:"success",
        data:{
            user
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
    const users=await User.find();
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
    console.log(user);
    if(!user)  
        throw "Please enter correct username or password";
    res.status(200).json({
        status:"success",
        data:{
            user
        }
    })    
    
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}