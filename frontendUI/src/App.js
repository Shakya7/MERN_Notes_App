import Header from "./components/Header";
import './App.css';
import { useState, useEffect } from "react";
import Login from "./components/LoginForm";
import Profile from "./components/ProfileData";
import Error from "./components/ErrorData";
import Footer from "./components/Footer";
import Signup from "./components/SignUpForm";
import AllNotes from "./components/user-notes-section/AllNotes";
import CreateNote from "./components/user-notes-section/CreateNote";
import UpdateDelNote from "./components/user-notes-section/UpdateDelNote";

function App() {
  const [loginActivate, setloginActivate]=useState(false);
  const [signupActivate, setSignupActivate]=useState(false);
  const [resultScreen,setResultScreen]=useState("");
  const [profileData,setProfileData]=useState("");
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [allNotesActive, setAllNotesActive]=useState(false);
  const [allNotesData,setAllNotesData]=useState([]);
  const [createNoteActive, setCreateNoteActive]=useState(false);
  const [createNoteActivePr,setCreateNoteActivePr]=useState(false);
  const [showNoteActive, setShowNoteActive]=useState(false);
  const [noteContent, setNoteContent]=useState("");
  const [idNote,setIdNote]=useState("");

  let profileInfo=profileData;

  useEffect(()=>{
    //console.log(signupActivate);
    //console.log(isLoggedIn);
    //console.log(showNoteActive, "This is the showNoteActive log");
    //console.log(`NOTE_CONTENT: ${noteContent}`);
    if(!signupActivate){
      if(isLoggedIn)
      {
        if(createNoteActivePr){
          setResultScreen("create-note");
        }
        else if(allNotesActive){
          if(showNoteActive)
            setResultScreen("update-delete-note");
          else if(createNoteActive){
            setResultScreen("create-note");
          }
          else{
            setResultScreen("all-notes");
          }
        }
        else{
          setResultScreen("show-profile");
          setProfileData(profileInfo);
        }
      }
    }
  },[signupActivate,allNotesActive,allNotesData,createNoteActive,resultScreen,createNoteActivePr,showNoteActive,idNote]);

  const getIdOfNote=(val)=>{
    console.log("Changed");
    setIdNote(val);
  }

  const showNoteA=(val)=>{
    setShowNoteActive(true);
    setNoteContent(val);
    setCreateNoteActive(false);
  }
  const getBackToProfile=()=>{
    setAllNotesActive(false);
    setCreateNoteActivePr(false);
    setShowNoteActive(false);
  }
  const createNoteClick=()=>{
    setCreateNoteActive(true);
    setCreateNoteActivePr(false);
    console.log("LEts see if its working");
  }
  const closeNoteClick=()=>{
    setCreateNoteActivePr(false);
    setCreateNoteActive(false);
  }
  const createNoteClickProfile=()=>{
    setCreateNoteActivePr(true);
    setCreateNoteActive(false);
    console.log("Lets see if its working from profile end");
  }
  const seeAllNotes=()=>{
    setAllNotesActive(true);
    setShowNoteActive(false);
  }
  const closeAllNotes=()=>{
    setAllNotesActive(false);
  }
  const getNotes=(val)=>{
    setAllNotesData(val);
  }

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
    //console.log(isLoggedIn);
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
  return (
    <div className="container">
      <Header closeCrNote={closeNoteClick} aaa={screenRoute} notesActiveTrigger={closeAllNotes} showLogin={isLoggedIn} cool={showLoginBttn} homeScreen={screenRoute} alertRoute={loginRoute} alertSignUpR={signupRoute} closeLogin={closeloginPage} closeSignup={closesignupPage}/>
      
      <div className="body">

        {
          loginActivate?<p className="login-above-text">Please login</p>:<p></p>
        }
        {
          loginActivate?<Login testF={stateLifting} action={abc} showResultScreen={screenRoute} alertRoute={loginRoute}/>:""
        }
        {
          resultScreen==="show-profile"?<Profile closeNoteCreation={closeNoteClick} createNoteProf={createNoteClickProfile} sendNotes={getNotes} dataP={profileData} showResultScreen={screenRoute} showAllNotes={seeAllNotes}/>:resultScreen==="all-notes"?<AllNotes notes={allNotesData} goBack={getBackToProfile} getNoteID={getIdOfNote} showNote={showNoteA} createNote={createNoteClick}/>:resultScreen==="create-note"?<CreateNote returnBackToProfile={getBackToProfile}/>:resultScreen==="update-delete-note"?<UpdateDelNote idNte={idNote} noteData={noteContent} returnBackToProfile={getBackToProfile}/>:resultScreen==="error"?<Error/>:""
        }
        {
          signupActivate?<p className="login-above-text">Signup to avail this AWESOME app</p>:<p></p>
        }
        {
          signupActivate?<Signup actualData={profileData} testF={stateLifting} action={abc} showResultScreen={screenRoute} closeSingup={closesignupPage}/>:""
        }
        {

        }
      </div>
      <Footer />
    </div>
      
        
    
  );
}

export default App;
