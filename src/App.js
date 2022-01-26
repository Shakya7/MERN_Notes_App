import Header from "./components/Header";
import './App.css';
import { useState, useEffect } from "react";
import Login from "./components/LoginForm";
import Profile from "./components/ProfileData";
import Error from "./components/ErrorData";
import Footer from "./components/Footer";
import Signup from "./components/SignUpForm";

function App() {
  const [loginActivate, setloginActivate]=useState(false);
  const [signupActivate, setSignupActivate]=useState(false);
  const [resultScreen,setResultScreen]=useState("");
  const [profileData,setProfileData]=useState("");
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  let profileInfo=profileData;

  useEffect(()=>{
    //console.log(signupActivate);
    //console.log(isLoggedIn);
    if(!signupActivate){
      if(isLoggedIn)
      {
        setResultScreen("show-profile");
        setProfileData(profileInfo);
      }
    }
  },[signupActivate]);

  const loginRoute=()=>{
    setloginActivate((prev)=>!prev);
  }
  const closeloginPage=()=>{
    setloginActivate(false);
  }
  const signupRoute=()=>{
    setSignupActivate((prev)=>{
      return !prev;
      
    });
    console.log(isLoggedIn);
  }
  const closesignupPage=()=>{
    setSignupActivate(false);
  }
  const screenRoute=(res)=>{
    setResultScreen(res);
  }
  const stateLifting=(res)=>{
    setProfileData(res);
  }
  const abc=()=>{
    setIsLoggedIn(true);
  }
  const showLoginBttn=()=>{
    setIsLoggedIn(false);
  }
  const showHomePage=()=>{
    
  }
  return (
    <div className="container">
      <Header aaa={screenRoute} showLogin={isLoggedIn} cool={showLoginBttn} homeScreen={screenRoute} alertRoute={loginRoute} alertSignUpR={signupRoute} closeLogin={closeloginPage} closeSignup={closesignupPage}/>
      
      <div className="body">
        {
          showHomePage()
        }

        {
          loginActivate?<p className="login-above-text">Please login</p>:<p></p>
        }
        {
          loginActivate?<Login testF={stateLifting} action={abc} showResultScreen={screenRoute} alertRoute={loginRoute}/>:""
        }
        {
          resultScreen==="show-profile"?<Profile dataP={profileData} showResultScreen={screenRoute}/>:(resultScreen==="error"?<Error/>:"")
        }
        {
          signupActivate?<p className="login-above-text">Signup to avail this AWESOME app</p>:<p></p>
        }
        {
          signupActivate?<Signup actualData={profileData} testF={stateLifting} action={abc} showResultScreen={screenRoute} closeSingup={closesignupPage}/>:""
        }
      </div>
      <Footer />
    </div>
      
        
    
  );
}

export default App;
