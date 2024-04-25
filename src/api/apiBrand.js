import axiosInstace from "./axios";

const apiBrand={
    getAll:()=>{
        return axiosInstace.get("/brands").then((res)=>res.data);
    },
    createBrand:(brand)=>{
        return axiosInstace.post("/brands",brand);
    },
    getBrandById:(id)=>{
        return axiosInstace.get(`/brands/${id}`).then((res)=>res.data);
    },
    editBrand:(id,brand)=>{
        return axiosInstace.put(`/brands/${id}`,brand);
    },
    delBrand:(id)=>{
        return axiosInstace.delete(`brands/${id}`);
    }

}

export default apiBrand