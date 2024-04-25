import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import apiBrand from "../../api/apiBrand";
function BrandList(){
    const[brands,setBrand]=useState([]);
    const[delBrandItem,setDelBrandItem]=useState(false);
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
    },[delBrandItem])
    const delBrand=async(id)=>{
        apiBrand.delBrand(id).then(res=>{
            try{
                alert("Xóa thành công");
                setDelBrandItem(id);
            }catch(e){
                console.log("del error: ",e)
            }
        })
    }
    return(
        <div>
            <button><Link className="btn btn-primary" to="/admin/addBrand">Thêm Brand</Link></button>
            <table className="table table-striped table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Tên nhà cung cấp</th>
                    <th>Slug</th>
                    <th>Address</th>
                    <th>Hành động</th>
                   
                </tr>
                {
                    brands.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.slug}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button><Link className="btn btn-success" to={`/admin/editBrand/${item.id}`}>Sửa</Link></button>
                                    <button onClick={()=>delBrand(item.id)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default BrandList