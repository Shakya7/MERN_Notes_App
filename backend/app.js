const express=require("express");
const app=express();
const userRouter=require("./routes/userRoutes");
const viewRouter=require("./routes/viewRoutes");
const noteRouter=require("./routes/noteRoutes");
const cookieParser=require("cookie-parser");


//Middleware
app.use(express.json({limit:"10kb"}));
app.use(express.urlencoded({extended:true, limit:"10kb"}));
app.use(cookieParser());

//app.options("*",cors({origin:"http://127.0.0.1:3000",optionsSuccessStatus:200}));
//app.use(cors({origin:"http://127.0.0.1:3000",optionsSuccessStatus:200}));
app.use((req, res, next)=>{ 
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader(  
        "Access-Control-Allow-Headers",  
        "Origin, X-Requested-With, Content-Type, Accept");  
    res.setHeader("Access-Control-Allow-Methods",  
        "GET, POST, PATCH, DELETE, OPTIONS");       
    next();  
});  
app.use("/",viewRouter);
app.use("/api/v1/users",userRouter);
app.use("/api/v1/notes",noteRouter);

module.exports=app;