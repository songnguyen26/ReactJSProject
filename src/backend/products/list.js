import React,{useState,useEffect}from "react";
import { Link, useParams } from "react-router-dom";
import apiProduct from "../../api/apiProducts";
import { imageURL } from "../../api/config";
import { IoIosEye} from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function ProductList(){
    const[products,setProducts]=useState([]);
    const[pages,setPages]=useState(1);
    const page=parseInt(useParams().page);
    const limit=5;
    const navigate=useNavigate();
    const[delProductItem,setDelProductItem]=useState(false);
    useEffect(()=>{
        apiProduct.getProductPagination(page,limit).then((res)=>{
            try{
                const numberOfPages=Math.ceil(res.meta.pagination.total / res.meta.pagination.pageSize)
                setPages(numberOfPages);
                const productsData=res.data.map((item)=>{
                    return{
                        id:item.id,
                        product_name:item.attributes.product_name,
                        slug:item.attributes.slug,
                        cat_id:item.attributes.cat_id,
                        description:item.attributes.description,
                        is_on_sale:item.attributes.is_on_sale,
                        price:item.attributes.price,
                        sale_price:item.attributes.sale_price,
                        image:item.attributes.image.data.attributes.url
                    }
                })
                setProducts(productsData);
                console.log("product list: ",productsData)
            }catch(e){
                console.log("fail to fetch product list: ",e)
            }
        })
    },[delProductItem,page])
    const delProduct= async(id)=>{
        apiProduct.delProduct(id).then(res=>{
            try{
                alert("xóa thành công");
                setDelProductItem(id);
            }
            catch(e){
            console.log(e)}
        })
    }
    return(
        <div>
            <h1>Product List</h1>
            <button style={{border:"none", marginBottom:"20px"}}><Link  className="btn btn-primary"  to="/admin/addproduct">Thêm sản phẩm</Link></button>
            <table className="table table-striped table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Danh mục</th>
                    <th>Đơn giá</th>
                    <th>Hành động</th>
                   
                </tr>
                {
                        products.map((product)=>{
                            return(
                                <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><img src={imageURL+product.image} alt={product.product_name} /></td>
                                <td>{product.product_name}</td>
                                <td>{product.cat_id}</td>
                                <td>{product.price}</td>
                                <td>
                                    
                                    <Link  to={`/admin/editProduct/${product.id}`} className="btn btn-primary"><FaEdit /></Link>
                                    <Link onClick={()=>delProduct(product.id)} className="btn btn-primary"><MdDelete /></Link>
                                </td>
                                
                            </tr>
                            )
                        })
                    }
            </table>
            <ul class="pagination">
                <li class="page-item"><Link class="page-link" to={`/admin/products/${page-1}`}>Previous</Link></li>
                {
                    Array.from(Array(pages).keys()).map((index)=>(
                        <li key={index} className={`page-item ${index+1===page? "active":""}`}>
                            <Link className="page-link" to={`/admin/products/${index+1}`}>
                                {index+1}
                            </Link>
                        </li>
                    ))
                }
                <li class="page-item"><Link class="page-link" to={`/admin/products/${page+1}`}>Next</Link></li>
            </ul>
        </div>
    )
}
export default ProductList