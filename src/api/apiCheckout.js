
import axiosInstace from "./axios";
const apiCheckout={
    createOrder:(data)=>{
        return axiosInstace.post("/orders",data);
    },
    createOrderDetail:(data)=>{
        return axiosInstace.post("/oder-details",data);
    }
}
export default apiCheckout;