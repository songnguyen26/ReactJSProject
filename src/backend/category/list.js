import { Link } from "react-router-dom";
import apiCategory from "../../api/apiCategory"
import { useEffect, useState } from "react"
function CategoryList(){
    const [categories,setCategories]=useState([]);
    const[delCategoryItem,setDelCategoryItem]=useState(false);
    useEffect(()=>{
        apiCategory.getAll().then(res=>{
            try{
                const categoriesData=res.data.map((item)=>{
                    return {
                        id:item.id,
                        name:item.attributes.category_name,
                        parent_id:item.attributes.parent_id,
                        slug:item.attributes.slug
                    }
                });
                setCategories(categoriesData);
            }catch(e){
                console.log(e)
            };
        })
    },[delCategoryItem]);
    const delCategory=async (id)=>{
        apiCategory.delCategory(id).then(res=>{
            try{
                alert("Xóa thành công")
                setDelCategoryItem(id);
            }catch(e){
                console.log(e)
            }
        })
    }
    return(
        <>
        <button><Link className="btn btn-primary" to="/admin/addCategory">Thêm danh mục</Link></button>
         <h1>Danh sach danh muc</h1>
         <table className="table table-striped table-bordered">
            <tr>
                <th>ID</th>
                <th>Danh mục</th>
                <th>Danh mục cha</th>
                <th>Slug</th>
                <th>Hành động</th>
            </tr>
            {
                categories.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.parent_id}</td>
                            <td>{item.slug}</td>
                            <td>
                                <button><Link className="btn btn-success" to={`/admin/editCategory/${item.id}`}>Sửa</Link></button>
                                <button onClick={()=>delCategory(item.id)}>Xóa</button>
                            </td>
                        </tr>
                        
                    )
                })
            }
         </table>   
        </>
       

    )
}
export default CategoryList