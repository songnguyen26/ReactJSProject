import React,{useContext, useState} from "react";
import apiUser from "../../../api/apiUser";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {setUser}=useContext(UserContext);
    const navigate=useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data={
            identifier:email,
            password:password,
        };
        try{
            const response= await apiUser.loginUser(data);
            console.log(response)
            var user=response.data.user;
            setUser(user);
            navigate("/");
        }catch(error){
            console.log(error)
        }
    };
    return(
        <>
             {/* <!-- Modal --> */}


    {/* <!-- Start Content Page --> */}
    <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Log In</h1>
        </div>
    </div>

    <div className="container py-5">
        <div className="row py-5">
            <form onSubmit={handleSubmit}   className="col-md-9 m-auto">
                <div className="row">
                    <div className="form-group col-md-12 mb-3">
                        <label for="email">Email</label>
                        <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email"
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="password">Password</label>
                    <input type="password" className="form-control mt-1" id="password" name="password" placeholder="Enter Password"
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="row">
                    <div className="col text-center mt-2">
                        <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    {/* <!-- End Contact --> */}
        </>
    )
}
export default Login;