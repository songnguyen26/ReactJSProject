import { useEffect, useState } from "react"
import apiUser from "../../api/apiUser"
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function UserList(){
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        apiUser.getAll().then(res=>{
            console.log("user ",res.data)
            try{
                const userData=res.data.map((user)=>{
                    return{
                        id:user.id,
                        username:user.username,
                        email:user.email,
                        phone:user.phone,
                        addresss:user.address
                    };
                });
                setUsers(userData);
                console.log("user data: ",userData)
            }catch(e){
                console.log(e)
            }
        })
    },[])
    return(
        <div>
             <table className="table table-striped table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Tên người dùng</th>
                    <th>email</th>
                    
                    <th>Hành động</th>
                   
                </tr>
                {
                    users.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                
                                <td><Link to={`/admin/users/${item.id}`}><IoEyeSharp /></Link></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default UserList