import {useState} from "react";
import axios from "axios";

function CreateNote(props){
    const [newNote, setNewNote]=useState("");

    return(
        <div className="create-notes-sec">
            Create Note section
            <div style={{display:"flex",justifyContent:"space-around", height:"70vh", width:"80vw", backgroundColor:"violet",padding:"30px",borderRadius:"10px", boxShadow: "rgb(106, 84, 116) 2.5px 2.5px 8px"}}>
                <form>
                    <div>
                        <textarea style={{width:"50vw",height:"50vh", padding:"50px", borderRadius:"10px"}} onChange={(e)=>{
                            console.log(e.target.value);
                            setNewNote(e.target.value);
                        }}/>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <button className="create-note-bttn" onClick={(e)=>{
                            e.preventDefault();
                            console.log(e);
                            props.returnBackToProfile();
                        }}>Cancel</button>
                        <button className="create-note-bttn" onClick={async(e)=>{
                            e.preventDefault();
                            console.log(newNote);
                            const result=await axios.post("/create-note",{
                                newNote
                            });
                            console.log(result);
                            props.returnBackToProfile();
                        }}>Create</button>
                    </div>
                </form>
            </div>
            <div style={{
                cursor: "pointer",
                width:"70px",
                height: "30px",
                borderRadius: "5px",
                backgroundColor: "rgb(252, 237, 151)",
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                color:"rgb(59, 32, 59)",
                fontSize: "10px",
                position: "absolute",
                top:"80px",
                left:"30px",
            }}>
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
                                props.returnBackToProfile();
                            }catch(err){
                                console.log(err);
                                //props.alertRoute();
                                props.showResultScreen("error");
                            }
                        }  
                }>Go back
                </div>
            </div>

        </div>
        
    )
}

export default CreateNote;
