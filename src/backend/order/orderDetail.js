import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiOrders from "../../api/apiOrder";
import { imageURL } from "../../api/config";
import { useNavigate } from "react-router-dom";
function OrdersDetail(){
    const {orderId}=useParams();
    const [orderDetails,setOrderDetails]=useState([]);
    const [status, setStatus] = useState([]);
    const [order, setOrder] = useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        apiOrders.getOrderById(orderId).then(res=>{
            console.log("order by id: ",res.data)
            try{
                const orderData = {
                    id: res.data.id,
                    user_id: res.data.attributes.user_id,
                    address: res.data.attributes.address,
                    username: res.data.attributes.username,
                    phone: res.data.attributes.phone,
                    status: res.data.attributes.status,
                    total_order: res.data.attributes.total_order,
                  };
                  setOrder(orderData);
                  console.log("Order:", orderData);
            }
            catch(e){
                console.log(e)
            }
        })
    },[orderId])
    useEffect(()=>{
        apiOrders. getOrderDetail(orderId).then(res=>{
            console.log("orders ",res.data)
            try{
                const ordersData=res.data.map((orderDetail)=>{
                    return{
                        order_id:orderDetail.attributes.order_id,
                        product_id:orderDetail.attributes.product_id,
                        product_name:orderDetail.attributes.product_name,
                        quantity:orderDetail.attributes.quantity,
                        price:orderDetail.attributes.price,
                        image:orderDetail.attributes.image,
                        total_price:orderDetail.attributes.total_price
                    };
                });
                setOrderDetails(ordersData);
                console.log("user data: ",ordersData)
                console.log("orders: ",orderDetails)
            }catch(e){
                console.log(e)
            }
        })
    },[orderId])
    const updateOrder = () => {
        const updatedOrder = { ...order, status: status };
        console.log("new order:", updatedOrder);
        apiOrders
          .editOrder(orderId, { data: updatedOrder })
          .then((res) => {
            if (res.status === 200) {
              setOrder(updatedOrder.status);
              alert("Update successfully!");
              navigate("/admin/orders");
            } else {
              alert("Failed to update.");
            }
          })
          .catch((error) => {
            console.error("Failed to update:", error);
            alert("Error updating order status.");
          });
      };
    return(
        <div className="cart row">
            
        <div className="col-md-6">
            <h3>Chi tiết đặt hàng</h3>
            <p>Mã hóa đơn {order.id} </p>
            <p>Tên khách hàng {order.username}</p>
            <p>
          <strong>Tình trạng đơn hàng:</strong>
          <select
            type="text"
            className="form-control border-0 "
            placeholder="Slug"
            style={{ width: "130px", marginLeft: "140px" }}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            name="status"
            required
          >
            <option value={"Chưa giao"}>Chưa giao</option>
            <option value={"Đang giao"}>Đang giao</option>
            <option value={"Đã giao"}>Đã giao</option>
          </select>
        </p>
        <button
          style={{ marginLeft: "70px", marginTop: "30px" }}
          type="submit"
          class="btn btn-success"
          onClick={updateOrder}
        >
          Cập nhật
        </button>
        </div>
        <div className="col-md-6">
            <h3>Thong tin gio hang</h3>
            <table className="table table-bordered">
                <tr>
                    {/* <th>Hình ảnh</th> */}
                    <th>Tên sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                </tr>
                {
                    orderDetails.map((e,index)=>{
                        return(
                            <tr key={index} >
                                {/* <td><image style = {{width:"100px"}} src={imageURL+ e.image}></image></td> */}
                                <td>{e.product_name}</td>
                                <td>{e.price}</td>
                                <td>{e.quantity}</td>
                                <td>{e.price*e.quantity}</td>
                            </tr>
                        )
                    })
                }
                <tr><th colSpan={3}>Tong tien</th><th>{order.total_order}</th></tr>
            </table>
        </div>

    </div>
    )
}
export default OrdersDetail