import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const initCart = {
    carts: [],
    amountItem: 0,
    totalAmount: 0
};

const cartReducer = (state = initCart,action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            
              const existingItemIndex = state.carts.findIndex(item => item.id === action.payload.id);
              if (existingItemIndex !== -1) {
                //san pham da ton tai trong gio hang
                const updatedCart = state.carts.map((item,index) => 
                    index === existingItemIndex ? {
                        ...item,quantity : item.quantity +action.payload.amount 
                     }: item // tang so luong sp khi nguoi dung chon o so luong
                );
                toast.info(`Tăng số lượng ${action.payload.name}`,{
                    position:"bottom-right",
                    autoClose:2000
                })
                return {
                    ...state,
                    carts: updatedCart,
                    amountItem:state.amountItem
                }
              }else {
                //sp chua co trong gio hang
                toast.success(`Thêm ${action.payload.name} vào trong giỏ hàng`,{
                    position:"bottom-right",
                    autoClose:2000
                })
                return {
                    ...state,
                    carts:[...state.carts,{...action.payload,quantity: action.payload.amount}],
                    amountItem:state.amountItem + 1//tang so luong sp trong gio hang len 1
                }
              }
              case 'TOTAL_CART':
                let total =0 ;
                state.carts.map(item => {
                    total += item.price *item.quantity;
                });
                const newState = {
                    ...state,
                    totalAmount : total
                }
                return newState;
            case "REMOVE_ITEM_CART":
                toast.warning(`Xóa ${action.payload.name} ra khỏi giỏ hàng`,{
                    position:"bottom-right",
                    autoClose:2000
                })
                return {
                    ...state,
                    carts:state.carts.filter(item => item.id !== action.payload.id)
                }
            case 'CLEAR_CART':
                toast.warning(`Xóa tất cả sản phẩm ra khỏi giỏ hàng`,{
                    position:"bottom-right",
                    autoClose:2000
                })
                return {
                    ...state,
                    carts:[]
                }
              default:
                return state;
            }
      
    }

export default cartReducer;