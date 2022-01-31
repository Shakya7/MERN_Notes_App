const mongoose=require("mongoose");
//const User = require("./userModel");

const noteSchema=new mongoose.Schema({
    note:{
        type:String,
        required:[true,"Must create a note"]
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:[true,"Must have a valid user ID"]
    }
});

noteSchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"_id name"
    });
    next();
})

const Note=mongoose.model("Note", noteSchema);
module.exports=Note;