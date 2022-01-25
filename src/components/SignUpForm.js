import axios from "axios";
import {useState,useEffect} from "react";

function Signup(props){
    const [name, setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    console.log(name,email,password,confirmPassword);
    const [newDataProf,setNewDataProf]=useState(props.actualData);


    useEffect(()=>{
        props.testF(newDataProf);
    },[newDataProf])


    return(
        <div className="signup-body">
            <form className="signup-card">
                <label>Enter your name: </label>
                <input type="text" onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                <br/>
                <label>Enter your email: </label>
                <input type="email" onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <br/>
                <label>Enter your password:</label>
                <input type="password" onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
                <br/>
                <label>Confirm your password:</label>
                <input type="password" onChange={(e)=>{
                    setConfirmPassword(e.target.value);
                }}/>
                <br/>
                <button className="bttn-signup" onClick={async(e)=>{
                    try{
                        e.preventDefault();
                        const result=await axios.post("/signup-form",{
                           name,
                           email,
                           password,
                           confirmPassword
                        })
                        console.log(result);
                        if(result.data.status==="success"){
                            setNewDataProf(result.data.data.user.name);
                            //await props.testF(dataProf);
                            await props.showResultScreen("show-profile");
                            //await props.alertRoute();
                            await props.action();
                            await props.closeSingup();
                        }
                        else{
                            throw "Incorrect email/password entered..."
                            props.showResultScreen("error");
                            //props.alertRoute();
                            
                        }

                    }catch(err){
                        console.log(err);
                    }
                }}>Signup</button>
            </form>
        </div>
    )    
}

export default Signup;