import axios from "axios";
import { useState, useEffect} from "react";

function Login(props){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    console.log(email,password);
    const [dataProf, setDataProf]=useState("");
    //console.log(data);
    useEffect(()=>{
        //props.alertRoute();
        //props.showResultScreen("show-profile");
        props.testF(dataProf);
    },[dataProf]);

    return(
        <div className="form-body">
            
            <form className="form-card">
                <div className="x-bttn-form">
                    <div onClick={e=>props.alertRoute()}>
                        X
                    </div>
                </div>
                <div className="form-main">
                    <div>
                        <label>Email:</label>
                    </div>
                    <div>
                        <input className="ip" type="email" placeholder="email address" name="email" onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-main">
                <div>
                        <label>Password:</label>
                    </div>
                    <div>
                        <input className="ip" type="password" placeholder="******" name="password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="bttn-login">
                    <div>
                        <button className="btn-lg" onClick={async(e)=>{
                            try{
                            e.preventDefault();
                            const result=await axios.post("/login-form",{
                                email:email,
                                password:password,
                            })
                            //console.log(result.data.data.user.name);
                            console.log(result);
                            if(result.data.status==="success"){
                                setDataProf(result.data.data.user.name);
                                //await props.testF(dataProf);
                                await props.showResultScreen("show-profile");
                                await props.alertRoute();
                                await props.action();
                            }
                            else{
                                throw "Incorrect email/password entered..."
                                //props.showResultScreen("error");
                                //props.alertRoute();
                                
                            }    
                            }catch(err){
                                console.log(err);
                                props.alertRoute();
                                props.showResultScreen("error");
                            }
                        }}>LOGIN</button>
                    </div>   
                </div>
            </form>
        </div>
    )
}
export default Login;