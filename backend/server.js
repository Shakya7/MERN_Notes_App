const app=require("./app");
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://shakya:******@cluster0.3hung.mongodb.net/Notes_App_MERN?retryWrites=true&w=majority").then((connection)=>{
    console.log("Database is connected now...");
    //console.log(connection);
})


app.listen(4000,()=>{
    console.log("Listening to server...");
})
