import axiosInstace from "./axios";

const apiUser={
    createUser: (data)=>{
        return axiosInstace.post("/auth/local/register",data)
    },
    loginUser:(data)=>{
        return axiosInstace.post("/auth/local",data)
    },
    getAll:()=>{
        return axiosInstace.get("/users");
    },
    getAdmin:()=>{
        return axiosInstace.get("/users?filters[role][id][$eq]=3").then((res)=>res.data);
    },
    getUserById:(id)=>{
        return axiosInstace.get(`/users/${id}`)
    }
}
export default apiUser