import NoteCard from "./NoteCard";

function AllNotes(props){
    console.log(props.notes);
    const notesPresent=props.notes.length;
    //console.log(notesPresent);
    return(
        <div className="all-notes-sec">
            All Notes
            <br/>
            <div>
                <input type="text" placeholder="Search for notes here" style={{padding:"10px",width:"80vw",height:"5vmin", borderRadius:"15px 15px 15px 15px"}}/>
            </div>
            {
                notesPresent?
                <div>
                    <div style={{marginTop:"10px", width:"80vw",height:"65vh",backgroundColor:"violet",borderRadius:"15px 15px 15px 15px", display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"20px",overflowY:"auto",scrollbarWidth:"none", padding:"20px"}}> 
                        {
                            props.notes.map((val,id)=>(
                                <NoteCard action="AAAAA" key={id} dataNotes={val.note}/>
                            ))
                        }
                    </div>
                </div>:"Oops...You dont have any notes created!"
            }
            <div style={{
                cursor: "pointer",
                width:"50px",
                height: "50px",
                borderRadius: "35px",
                backgroundColor: "rgb(252, 237, 151)",
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                color:"rgb(59, 32, 59)",
                fontSize: "30px",
                position: "absolute",
                bottom:"100px",
                right:"30px",
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
                                await props.createNote();
                            }catch(err){
                                console.log(err);
                                //props.alertRoute();
                                props.showResultScreen("error");
                            }
                        }  
                }>+
                </div>
            </div>
        </div>
    )
}
export default AllNotes;
