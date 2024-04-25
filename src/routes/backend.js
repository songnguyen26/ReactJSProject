import IndexAdmin from "../backend";
import NotFound from '../Frontend/pages/notfound/notfound'
import CategoryList from "../backend/category/list";
import AddCategory from "../backend/category/add";
import EditCategory from "../backend/category/edit";
import ProductList from "../backend/products/list";
import ProductAdd from "../backend/products/add";
import EditProduct from "../backend/products/edit";
import UserList from "../backend/users/list";
import BrandList from "../backend/brand/list";
import AddBrand from "../backend/brand/add";
import EditBrand from "../backend/brand/edit";
import LoginAdmin from "../backend/admin/login";
import Orders from "../backend/order/orders";
import OrdersDetail from "../backend/order/orderDetail";
import UserDetail from "../backend/users/detail";
const  BackendRoute=[
    
       {'path':'/admin/category','component':CategoryList},
       {'path':'/admin/addCategory','component':AddCategory},
       {'path':'/admin/editCategory/:id','component':EditCategory},
       {'path':'/admin/products/:page','component':ProductList},
       {'path':'/admin/addproduct','component':ProductAdd},
       {'path':'/admin/editProduct/:id','component':EditProduct},
       {'path':'/admin/users','component':UserList},
       {'path':'/admin/users/:id','component':UserDetail},
       {'path':'/admin/brands','component':BrandList},
       {'path':'/admin/addBrand','component':AddBrand},
       {'path':'/admin/editBrand/:id','component':EditBrand},
       {'path':'/admin/orders','component':Orders},
       {'path':'/admin/orderDetail/:orderId','component':OrdersDetail},
       {'path':'*','component':NotFound},
    
]
export default BackendRoute