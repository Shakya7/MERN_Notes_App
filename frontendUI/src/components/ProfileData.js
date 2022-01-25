import NoteCreate from "./NoteCreate";

function Profile(props){
    console.log(props.dataP);


    const f1=()=>{
        return(
            <NoteCreate/>
        )
    }
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
                    <div >
                        <button onClick={(e)=>{
                        f1()
                    }}>+</button>
                    </div>
                </div>
                <div className="profile-main-section">
                    <div className="notes-sec">
                        <div className="prof-sub">
                            View all Notes
                        </div>
                        <div className="prof-sub">
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
