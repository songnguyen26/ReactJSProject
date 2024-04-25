import axiosInstace from "./axios";
const apiOrders={
    getAll: ()=>{
        return axiosInstace.get('/orders').then((res)=>res.data);
    },
    getOrderDetail:(order_id)=>{
        return axiosInstace.get(`/oder-details??filters[order_id][$eq]=${order_id}`).then((res)=>res.data);
    },
    getOrderById:(id)=>{
        return axiosInstace.get(`/orders/${id}`).then((res)=>res.data);
    },
    editOrder: (id, order) => {
        return axiosInstace.put(`/orders/${id}`, order);
        },    
}
export default apiOrders