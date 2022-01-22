const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must enter a name"],
    },
    email:{
        type:String,
        validate:[validator.isEmail,"Provide a valid email address"]
    },
    password:{
        type:String,
        required:[true, "Please enter password"],
        select:false,
        minlength: 8
    },
    confirmPassword:{
        type:String,
        validate:{
            validator:function(val){
                if(this.password===val)
                    return true;
                return false;    
            },
            message:"Password do not match"
        }
    },
    role:{
        type:String,
        enum:["admin","user"]
    }
});

const User=mongoose.model("User", userSchema);
module.exports=User;