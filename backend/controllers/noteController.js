const Note= require("../models/notesModel");
const User = require("../models/userModel");

exports.createNote=async (req,res)=>{
    try{
        const note=await Note.create(req.body);
        res.status(201).json({
            status:"success",
            data:{
                note
            }
        })
    }catch(err){
        res.status(400).json({
            status:"error",
            message:err
        })
    }
}
exports.getAllNotesOfUser=async (req,res)=>{
    try{
        const user=res.user;
        console.log(user);
        const userData=await User.findById({_id:user._id}).populate({
            path:"notes",
            select:"note -_id -user"
        });
        const allNotes=userData.notes;
        console.log(allNotes);
        res.status(200).json({
            status:"success",
            data:{
                allNotes
            }
        });
    }catch(err){
        res.status(400).json({
            status:"error",
            message:err
        })
    }
}

exports.getAllNotes=async (req,res)=>{
    try{
        const notes=await Note.find();
        res.status(200).json({
            status:"success",
            data:{
                notes
            }
        })
    }catch(err){
        res.status(400).json({
            status:"error",
            message:err
        })
    }
}

exports.getNote=async (req,res)=>{
    try{
        const note=await Note.findById(req.params.id);
        res.status(201).json({
            status:"success",
            data:{
                note
            }
        })
    }catch(err){
        res.status(400).json({
            status:"error",
            message:err
        })
    }
}

exports.updateNote=async (req,res)=>{
    try{
        const note=await Note.findByIdAndUpdate(req.params.id,{
            note:req.body.note
        },{
            new:true
        });
        res.status(200).json({
            status:"success",
            data:{
                note
            }
        })
    }catch(err){
        res.status(400).json({
            status:"error",
            message:err
        })
    }
}

exports.deleteNote=async (req,res)=>{
    try{
        const note=await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"success",
            data:{
                note
            }
        })
    }catch(err){
        res.status(400).json({
            status:"error",
            message:err
        })
    }
}
