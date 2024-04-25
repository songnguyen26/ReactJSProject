import { useState,useEffect } from "react";
import apiCategory from "../../api/apiCategory";
import { useNavigate } from "react-router-dom";
function AddCategory(){
    const[catName,setCatName]=useState("");
    const[parentID,setParentID]=useState("");
    const[slug,setSlug]=useState("");
    const [categories,setCategories]=useState([]);
    const navigate=useNavigate();
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
    },[]);
    const hanldeSubmit= async(e)=>{
        e.preventDefault();
        const category={
            category_name:catName,
            slug:slug,
            parent_id:parseInt(parentID),
            
        };
        console.log(category)
        try{
            const respone=await apiCategory.createCategory({data:category});
            alert("them thanh cong");
            navigate("/admin/category");
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div style={{width:"50%",margin:"auto"}}>
            <h1>Thêm danh mục</h1>
            <form onSubmit={hanldeSubmit}>
                <div className="form-group">
                    <label htmlFor="category_name">Tên danh mục</label>
                    <input type="text" className="form-control" name="category_name" value={catName} 
                    onChange={(e)=> setCatName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="parent_id">Danh mục cha</label>
                    <select className="form-control" name="parent_id" value={parentID}
                    onChange={(e)=> setParentID(e.target.value)}>
                        <option value="0">Không có danh mục cha</option>
                        {
                            categories.map((item,index)=>{
                                return(
                                    <option key={index} value={item.id}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input type="text" className="form-control" name="slug" value={slug}
                    onChange={(e)=>setSlug(e.target.value)}/>
                </div>
                 <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
        </div>
    )
}
export default AddCategory