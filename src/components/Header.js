import React from "react";


function Header(props){
    return(
        <div className="header-div">
            <button className={"bttn bttn-home"} onClick={(e)=>{}}>Home</button>
            <div>
            {
                !(props.showLogin)?
                <button className="bttn" onClick={(e)=>{
                    props.closeSignup();
                    props.alertRoute();
                    props.aaa("");
                }}>Log In</button>:<button className="bttn" onClick={(e)=>{
                    props.cool();
                    props.homeScreen("");
                }}>Log Out</button>
            }    
                <button className="bttn" onClick={(e)=>{
                    props.closeLogin();
                    props.alertSignUpR();
                    props.aaa("");
                    
                }}>Signup</button>
            </div>
        </div>
    )
}
export default Header;