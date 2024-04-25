import React,{useContext} from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import apiCheckout from "../../../api/apiCheckout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLEAR, TOTAL } from "../../../redux/action/cartAction";

function Checkout(){
    const {user}=useContext(UserContext);
    const getDataCart= useSelector((state)=> state.cart.carts);
    const totalAmount=useSelector((state)=>state.cart.totalAmount);
    const dispath=useDispatch();
    const navigate=useNavigate();
    console.log(getDataCart)
    const handleCheckout= async(e)=>{
        try{
            e.preventDefault();
            const  orders={
                total_order:totalAmount,
                username:user.username,
                phone:user.phone,
                address:user.address,
                user_id:user.id
            }
            console.log("order_data:",orders)
            const addOrder= await apiCheckout.createOrder({data:orders});
            for(let i=0;i<getDataCart.length;i++){
                const order_detail={
                    order_id:addOrder.data.data.id,
                    product_id:getDataCart[i].id,
                    product_name:getDataCart[i].name,
                    quantity:getDataCart[i].quantity,
                    price:getDataCart[i].price,
                    image:getDataCart[i].image,
                    total_price:getDataCart[i].price*getDataCart[i].quantity
                }
                const addOrderDetail=await apiCheckout.createOrderDetail({data:order_detail})
            }
            
            console.log("Order: successful:",orders);
            alert("Order: successful:");
            dispath(CLEAR());
            navigate("/")
        }catch(error){
            console.log("order error:",error)
        }
    }
    return(
        user?
        <div className="cart row">
            
            <div className="col-md-6">
                <h3>Thong tin khach hang</h3>
                    <form onSubmit={handleCheckout}>
                        <div class="mb-3 mt-3">
                            <label for="name"><b>Họ Tên</b></label>
                            <input type="text" class="form-control"placeholder="Ho ten" name="name" value={user.username} />
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email"><b>Email</b></label>
                            <input type="text" class="form-control"placeholder="Email" name="email" value={user.email} />
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="name"><b>Dien thoai</b></label>
                            <input type="text" class="form-control"placeholder="Dien Thoai" name="phone" value={user.phone} />
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="name"><b>Dia chi</b></label>
                            <input type="text" class="form-control"placeholder="Dia chi" name="address" value={user.address} />
                        </div>
                        <button type="submit" class="btn btn-success">Thanh toán</button>
                    </form>
            </div>
            <div className="col-md-6">
                <h3>Thong tin gio hang</h3>
                <table className="table table-bordered">
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                    {
                        getDataCart.map((e)=>{
                            return(
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.quantity}</td>
                                    <td>{e.price*e.quantity}</td>
                                </tr>
                            )
                        })
                    }
                    <tr><th colSpan={3}>Tong tien</th><th>{totalAmount}</th></tr>
                </table>
            </div>

        </div>:
        <div className="cart">
            <h1>Dang nhap de thanh toan</h1>
            <button type="button" className="btn btn-info"><Link to="/login" className='text-white text-decoration-none'>
            Dang Nhap</Link></button>
        </div>
    )
}
export default Checkout;