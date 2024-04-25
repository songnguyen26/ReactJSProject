import {  useDispatch, useSelector } from "react-redux";
import cartReducer from "../../../redux/reducers/cartReducer";
import CartItem from "./cartItem";
import { CLEAR, TOTAL } from "../../../redux/action/cartAction";
import { clear } from "@testing-library/user-event/dist/clear";
import { Link } from "react-router-dom";


function Cart() {
    const getDataCart = useSelector(state => state.cart.carts);
    const dispath = useDispatch();
    dispath(TOTAL());

    const clearCart =() => {
        dispath(CLEAR());
    }
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    console.log("getDataCart", getDataCart);
    return (
        <div>
            <h1>Giỏ hàng</h1>
            <table className="table table-bordered">
                <tr>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Đơn Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th>Xóa</th>
                </tr>
           
                {
                    getDataCart.map((e) =>{
                        return (
                            <CartItem item ={e}/>
                        )
                    })
                }
                <tr><th colSpan={4}>Tổng tiền</th><th colSpan={2}>{totalAmount}</th></tr>
            </table>
            <button type="button" className="btn btn-danger me-1"onClick={() => clearCart()}>Xóa giỏ hàng</button>
            <button type="button" className="btn btn-info" > <Link to= "/checkout" className="text-white text-decoration-none">Thanh toán</Link></button>
        </div>
    );
}

export default Cart;