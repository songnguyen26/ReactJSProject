import { Link, Outlet, useNavigate } from "react-router-dom"
import UserContext from "../Frontend/context/userContext"
import LoginAdmin from "./admin/login";
import { useContext } from "react"
function IndexAdmin(){
  const{user}=useContext(UserContext);
  console.log("admin login",user)
  const navigate=useNavigate();
  // if(!(adminLogin))
  // {
  //   navigate("/admin/login")
  // }
    return(
        user ? <div>
        <div className="p-5 bg-primary text-white text-center">
<h1>Admin</h1>

</div>

<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
<div className="container-fluid">
<ul className="navbar-nav">
  <li className="nav-item">
    
    <Link className="nav-link active" to="/admin">Trang chu</Link>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Danh sách quản lý</a>
    <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to="/admin/category">Danh mục</Link></li>
        <li><Link class="dropdown-item" to="/admin/products/1">Sản phẩm</Link></li>
        <li><Link class="dropdown-item" to="/admin/users">Người dùng</Link></li>
        <li><Link class="dropdown-item" to="/admin/orders">Đơn hàng</Link></li>
        <li><Link class="dropdown-item" to="/admin/brands">Nhà cung cấp</Link></li>
    </ul>
    </li>
</ul>
</div>
</nav>

<div className="container mt-5">
<div className="row">
        <Outlet/>
    
</div>
</div>

<div className="mt-5 p-4 bg-dark text-white text-center">
<p>Footer</p>
</div>

    </div>:
      <LoginAdmin/>
    )
}
export default IndexAdmin