import {Link} from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import apiCategory from "../../api/apiCategory";
import UserContext from "../context/userContext";
import apiBrand from "../../api/apiBrand";
function Menu(){
    const{user}=useContext(UserContext);
    const [subMenu,setSubMenu]=useState([]);
    const[brands,setBrand]=useState([]);
    
    useEffect(()=>{
        apiBrand.getAll().then(res=>{
            console.log(res.data)
            try{
                const brandData=res.data.map((brand)=>{
                    return{
                        id:brand.id,
                        name:brand.attributes.brand_name,
                        slug:brand.attributes.slug,
                        address:brand.attributes.address
                    }
                })
                setBrand(brandData)
            }catch(e){
                console.log(e)
            }
        })
    },[])
    useEffect(()=>{
        apiCategory.getAll().then((res)=>{
            try{
                const menuData=res.data.map((item)=>{
                    return {
                        id:item.id,
                        name:item.attributes.category_name,
                        slug:item.attributes.slug,
                        parent:item.attributes.parent_id
                    }
                })
                setSubMenu(menuData);
                console.log(menuData);
            }catch(e){
                console.log(e)
            }
        })
    },[])
    return(
        <>
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                   <li className="nav-item">
                       <Link to="/">Home</Link>
                   </li>
                   <li className="nav-item"><Link to="/products">Product</Link>
                        <ul className="category">
                            {
                                subMenu.map((submenu,index)=>{
                                    return(
                                        submenu.parent===0?(
                                            <li key={index} className="category-content">
                                                <Link to={`product-by-cat/${submenu.slug}`} >{submenu.name}</Link>
                                                <ul>
                                                    {
                                                        subMenu.map((sub,index)=>{
                                                            return(
                                                                sub.parent===submenu.id?
                                                                (<li key={index} className="">
                                                                    <Link to={`product-by-cat/${sub.slug}`} >{sub.name}</Link>
                                                                </li>):null
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        ):null
                                    )
                                })
                            }
                        </ul>   
                    
                   </li>
                   <li className="nav-item"><Link to="/products">Brand</Link>
                            <ul className="category">
                                {
                                    brands.map((brand,index)=>{
                                        return(
                                            <li key={index} className="category-content"><Link to={`/product-by-brand/${brand.id}`}>{brand.name}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                   </li>
                   <li className="nav-item">
                        <Link to="/about">About Us</Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/register">Sign Up</Link>
                   </li>
                
                   {
                        user?(
                        
                             <li className="nav-item">
                             <Link to="/logout">Logout</Link>
                        </li>
                        ):
                        (
                            <li className="nav-item">
                            <Link to="/login">Login</Link>
                       </li>
                        )
                   }
                   <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                   </li>
               </ul>
        </>
    )
}
export default Menu;