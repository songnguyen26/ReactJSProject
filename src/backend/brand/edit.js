import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import apiBrand from "../../api/apiBrand";
function EditBrand(){
    const {id}=useParams();
    const [brandName,setBrandName]=useState("");
    const [slug,setSlug]=useState("");
    const [address,setAddress]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        apiBrand.getBrandById(id).then(res=>{
            try{
                console.log("brand: ",res);
                const brandData=res.data.attributes;
                setBrandName(brandData.brand_name);
                setSlug(brandData.slug);
                setAddress(brandData.address)

            }catch(e){
                console("error: ",e)
            }
        })
    },[])
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const BrandEdit={
            brand_name:brandName,
            slug:slug,
            address:address
        }
        console.log("Brand edit: ",BrandEdit);
        try{
            const respone= await apiBrand.editBrand(id,{data:BrandEdit})
            alert("Sửa thành công");
            navigate("/admin/brands");
        }catch(e){
            console.log("Edit error: ",e);
        }
        
    }
    return (
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
                <button type="submit" className="btn btn-primary">Sửa</button>
            </form>
        </div>
    )
}
export default EditBrand;