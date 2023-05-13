import React, {useState, useEffect} from "react";
import axios from "axios";
const ShowUser =(props)=>{
    const {listUser}=props;
    return (
        <div>
            {listUser.map((user, index)=>{
                return (
                    <React.Fragment key={user.id}>
                        <ul>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                        </ul>
                    </React.Fragment>
                )
            })}
        </div>
    )
}
export default function App(props){
    const[listUser, setListUser]=useState([]);
    useEffect(()=>{
        const getUserAPI="https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users"
        axios.get(getUserAPI).then((res)=>{
            setListUser(res.data);
        }).catch((err)=>{
            console.log(err);
            alert("xảy ra lỗi");
        })
    },[])
    return (
        <>
        <code>Thông tin người dùng</code><br/>
        <ShowUser listUser={listUser}/>
        </>
    )
}