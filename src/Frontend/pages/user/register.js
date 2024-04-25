import React,{useState} from 'react';
import apiUser from '../../../api/apiUser';
import { useNavigate } from 'react-router-dom';
function Register(){
    const[username,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const handleSubmit=async(e)=>{
        try{
            e.preventDefault();
            const user={
                username:username,
                email:email,
                password:password,
                address:address,
                phone:phone
            }
            const response=await apiUser.createUser(user);
            console.log("Registration: successful:",response);
            alert("Registration: successful:");
        }catch(error){
            console.log("Registration error:",error)
        }
    }
    return(
        <>
             {/* <!-- Modal --> */}


    {/* <!-- Start Content Page --> */}
    <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Sign Up</h1>
        </div>
    </div>

    <div className="container py-5">
        <div className="row py-5">
            <form  onSubmit={handleSubmit}  className="col-md-9 m-auto">
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label for="username">User name</label>
                        <input type="text" className="form-control mt-1" id="username" name="username" placeholder="Enter Username"
                        value={username} onChange={(e)=>setUserName(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label for="email">Email</label>
                        <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email"
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="password">Password</label>
                    <input type="password" className="form-control mt-1" id="password" name="password" placeholder="Enter Password"
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="address">Address</label>
                    <input type="text" className="form-control mt-1" id="address" name="address" placeholder="Enter Address"
                    value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="phone">Phone</label>
                    <input type="text" className="form-control mt-1" id="phone" name="phone" placeholder="Enter Phone"
                    value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
             
                <div className="row">
                    <div className="col text-center mt-2">
                        <button type="submit" className="btn btn-success btn-lg px-3">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    {/* <!-- End Contact --> */}
        </>
    )
}
export default Register;