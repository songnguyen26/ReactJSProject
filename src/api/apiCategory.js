import axios from "axios";
import axiosInstace from "./axios";
const apiCategory={
    getAll: () => {
        return axiosInstace.get("/categories").then((res)=>res.data);
    },
    createCategory:(category)=>{
        return axiosInstace.post("/categories",category).then((res)=>res.data);
    },
    getCategoryById:(id)=>{
        return axiosInstace.get(`/categories/${id}`)
    },
    //api edit category
    editCategory:(id,category)=>{
        return axiosInstace.put(`/categories/${id}`,category)
    },
    //api delete category
    delCategory:(id)=>{
        return axiosInstace.delete(`/categories/${id}`)
    }
}
export default apiCategory;