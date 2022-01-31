import axios from "axios";
import { useEffect, useState } from "react";

function Profile(props){
    console.log(props.dataP);
    const [notes,setNotes]=useState([]);
    //const [cNote,setCNote]=useState(false);
    useEffect(()=>{
        console.log("Notes Uploaded to Client-Side");
        console.log(notes);
        props.sendNotes(notes);
    },[notes]);

    return(
        <div className="profile-body">
            <div>
                <section className="side-section">
                
                </section>
            </div>
            <div className="show">
                <div>
                    <p className="wlcm-txt">Welcome, {props.dataP}</p>
                </div>
                <div className="note-create">
                    <div onClick={async(e)=>{
                            /*try{
                                const result=await axios.get("/get-notes");
                                //console.log(result.data.data.allNotes);
                                setNotes(result.data.data.allNotes);
                            }catch(err){
                                console.log(err);
                                //props.alertRoute();
                                props.showResultScreen("error");
                            }*/
                            try{
                                props.createNoteProf();
                                //setCNote(true);
                            }catch(err){
                                console.log(err);
                                //props.alertRoute();
                                props.showResultScreen("error");
                            }
                        }  
                    }>+
                    </div>
                </div>
                <div className="profile-main-section">
                    <div className="notes-sec">
                        <div className="prof-sub" onClick={async (e)=>{
                            try{
                            const result=await axios.get("/get-notes");
                            //console.log(result.data.data.allNotes);
                            setNotes(result.data.data.allNotes);
                            props.closeNoteCreation();
                            props.showAllNotes();
                            }catch(err){
                                console.log(err);
                                //props.alertRoute();
                                props.showResultScreen("error");
                            }
                        }}>
                            View all Notes
                        </div>
                        <div className="prof-sub" onClick={(e)=>{
                            try{
                                props.createNoteProf();
                                //setCNote(true);
                            }catch(err){
                                console.log(err);
                                //props.alertRoute();
                                props.showResultScreen("error");
                            }
                        }}>
                            Create a Note
                        </div>
                    </div>
                    <div className="tasks-sec">
                        <div className="prof-sub">
                            View all Tasks
                        </div>
                        <div className="prof-sub">
                            Create a Task
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Profile;
