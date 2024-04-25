import apiUser from "../../api/apiUser"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
function UserDetail(){
    const{id}=useParams();
    
    const [userId,setUserId]=useState("");
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    useEffect(()=>{
        apiUser.getUserById(id).then(res=>{
            console.log(res.data)
            try{
                const userData=res.data;
                setUserId(userData.id);
                setUserName(userData.username);
                setEmail(userData.email);
                setPhone(userData.phone);
                setAddress(userData.address);
                
                console.log("user data: ",userData)
            }catch(e){
                console.log(e)
            }
        })
    })
    return(
        <div>
             <table className="table table-striped table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Tên người dùng</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>Address</th>
                   
                   
                </tr>
             
                            <tr >
                                <td>{userId}</td>
                                <td>{userName}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{address}</td>
                               
                            </tr>
                     
            </table>
        </div>
    )
    

}
export default UserDetail