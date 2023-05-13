function First(props){
    return(
        <div>
            <div>
                <img src={props.avatar} alt="" width="200px"/>
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default First;