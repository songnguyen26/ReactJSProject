import { useState } from "react"
import { useNavigate } from "react-router-dom";
import apiBrand from "../../api/apiBrand";
function AddBrand(){
    const [brandName,setBrandName]=useState("");
    const [slug,setSlug]=useState("");
    const [address,setAddress]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e) =>{
        e.preventDefault();
        const Brands={
            brand_name:brandName,
            slug:slug,
            address:address
        };
        console.log("brand: ",Brands);
        try{
            const respone= await apiBrand.createBrand({data:Brands});
            alert("them thanh cong");
            navigate("/admin/brands");
        }catch(e){
            console.log("add error: ",e);
        }
    }
    return(
        <div style={{width:"50%",margin:"auto"}}>
            <h1>Thêm Brand</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category_name">Tên Brand</label>
                    <input type="text" className="form-control" name="category_name" value={brandName} 
                    onChange={(e)=> setBrandName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input type="text" className="form-control" name="slug" value={slug}
                    onChange={(e)=>setSlug(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <input type="text" className="form-control" name="address" value={address}
                    onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                 <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
        </div>
    )
}
export default AddBrand