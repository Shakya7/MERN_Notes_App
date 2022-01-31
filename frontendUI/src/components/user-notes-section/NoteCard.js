function NoteCard(props){
    //console.log(props.action)
    return(
        <div style={{width:"20vw",height:"auto",backgroundColor:"yellow",borderRadius:"10px 10px 10px 10px",padding:"10px", boxShadow: "rgb(106, 84, 116) 5px 5px 8px"}}>
            <div>
                <p>{props.dataNotes}</p>
            </div>
        </div>
    )
}
export default NoteCard;
