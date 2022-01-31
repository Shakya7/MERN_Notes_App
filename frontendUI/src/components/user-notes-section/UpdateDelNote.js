import {useState} from "react";
import axios from "axios";

function UpdateDelNote(props){
    const [updNote, setUpdNote]=useState(props.noteData);
    console.log(props.idNte);

    return(
        <div className="upddel-notes-sec">
            Update/ Delete Note section
            <div style={{display:"flex",justifyContent:"space-around", height:"70vh", width:"80vw", backgroundColor:"violet",padding:"30px",borderRadius:"10px", boxShadow: "rgb(106, 84, 116) 2.5px 2.5px 8px"}}>
                <form>
                    <div>
                        <textarea value={updNote} style={{width:"50vw",height:"50vh", padding:"50px", borderRadius:"10px"}} onChange={(e)=>{
                            console.log(e.target.value);
                            setUpdNote(e.target.value);
                        }}/>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <button className="create-note-bttn" onClick={(e)=>{
                            e.preventDefault();
                            props.returnBackToProfile();
                        }}>Cancel</button>

                        <button className="create-note-bttn" onClick={async(e)=>{
                            try{
                            e.preventDefault();
                            axios.delete(`/delete-note/${props.idNte}`);
                            props.returnBackToProfile();
                            }catch(err){
                                console.log(err);
                            }
                        }}>DELETE</button>
                        <button className="create-note-bttn" onClick={async(e)=>{
                            try{
                            e.preventDefault();
                            //console.log(newNote);
                            const result=await axios.patch(`/update-note/${props.idNte}`,{
                                note:updNote
                            });
                            console.log(result);
                            props.returnBackToProfile();
                            }catch(err){
                                console.log(err);
                            }
                        }}>UPDATE</button>
                    </div>
                </form>
            </div>

        </div>
        
    )
}

export default UpdateDelNote;
