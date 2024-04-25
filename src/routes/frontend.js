
import Home from '../Frontend/pages/home/home';
import About from '../Frontend/pages/about/about';
import Contact from '../Frontend/pages/contact/contact';
import Shop from '../Frontend/pages/shop/shop';
import NotFound from '../Frontend/pages/notfound/notfound';
import Products from '../Frontend/pages/product/product';
import ProductDetail from '../Frontend/pages/product/productDetail';
import ProductsByCat from '../Frontend/pages/product/productsByCat';
import Register from '../Frontend/pages/user/register'
import Login from '../Frontend/pages/user/login';
import LogoutUser from '../Frontend/pages/user/logout';
import Cart from '../Frontend/pages/cart/cart'
import Checkout from '../Frontend/pages/cart/checkout';
import ProductsByBrand from '../Frontend/pages/product/productsByBrand';
const FrontendRoute=[
    {'path':'/','component':Home},
    {'path':'/about','component':About},
    {'path':'/contact','component':Contact},
    {'path':'/shop','component':Shop},
    {'path':'/products','component':Products},
    {'path':'/product-detail/:slug','component':ProductDetail},
    {'path':'/product-by-cat/:slug','component':ProductsByCat},
    {'path':'/register','component':Register},
    {'path':'/login','component':Login},
    {'path':'/logout','component':LogoutUser},
    {'path':'/cart','component':Cart},
    {'path':'/checkout','component':Checkout},
    {'path':'/product-by-brand/:id','component':ProductsByBrand},
    {'path':'*','component':NotFound}
];
export default FrontendRoute;