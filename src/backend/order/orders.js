import { useEffect, useState } from "react"
import apiOrders from "../../api/apiOrder";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
function Orders(){
    const[orders,setOrders]=useState([]);
    useEffect(()=>{
        apiOrders.getAll().then(res=>{
            console.log("orders ",res.data)
            try{
                const ordersData=res.data.map((order)=>{
                    return{
                        id:order.id,
                        username:order.attributes.username,
                        phone:order.attributes.phone,
                        addresss:order.attributes.address,
                        status:order.attributes.status,
                        createdAt:order.attributes.createdAt
                    };
                });
                setOrders(ordersData);
                console.log("user data: ",ordersData)
                console.log("orders: ",orders)
            }catch(e){
                console.log(e)
            }
        })
    },[])
    return(
        <div>
             <table className="table table-striped table-bordered">
                <tr>
                    <th>Mã đơn hàng</th>
                    <th>Tên khách hàng</th>
                    <th>phone</th>
                    <th>Address</th>
                    <th>Ngày đặt</th>
                    <th>Tình trạng</th>
                    <th>Xem</th>
                   
                </tr>
                {
                    orders.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.phone}</td>
                                <td>{item.addresss}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.status}</td>
                                <td><Link to={`/admin/orderDetail/${item.id}`}><IoMdCart /></Link></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Orders