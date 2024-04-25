import { useParams } from "react-router-dom";
import { useState,useEffect } from "react"
import apiCategory from "../../api/apiCategory";
import apiBrand from "../../api/apiBrand";
import axiosInstace from "../../api/axios";
import apiProduct from "../../api/apiProducts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function EditProduct(){
    const {id}=useParams();
   
    const[productName,setProductName]=useState('');
    const[slug,setSlug]=useState('');
    const[catId,setCatId]=useState('');
    const[price,setPrice]=useState('');
    const[description,setDescripton]=useState('');
    const[isOnSale,setIsOnSale]=useState(false);
    const[salePrice,setSalePrice]=useState(0);
    const[image,setImage]=useState(null);
    const [brandId,setBrandId]=useState('');
    const navigate=useNavigate();
    const[categories,setCategories]=useState([]);
    const[brands,setBrand]=useState([]);
    const [imageId, setImangeId] = useState(0);
    useEffect(()=>{
        apiProduct.getProductById(id).then((res)=>{
            try{
                console.log("Product: ",res.data)
                const productById=res.data.attributes
                setProductName(productById.product_name);
                setSlug(productById.slug);
                setCatId(productById.cat_id);
                setPrice(productById.price);
                setDescripton(productById.description);
                setIsOnSale(productById.is_on_sale);
                setSalePrice(productById.salePrice);
                setImage(productById.image.data.attributes.url);
                setBrandId(productById.brand_id);
                setImangeId(productById.image.data.id);
                console.log("image url",image)
            }catch(e){
                console.log(e)
            }
        })
    },[])
    useEffect(()=>{
        apiCategory.getAll().then(res=>{
            try{
                const categoriesData=res.data.map((item)=>{
                    return {
                        id:item.id,
                        name:item.attributes.category_name,
                        parent_id:item.attributes.parent_id,
                    }
                });
                setCategories(categoriesData);
            }catch(e){
                console.log(e)
            };
        })
    },[]);
    useEffect(()=>{
        apiBrand.getAll().then(res=>{
            try{
                const branData=res.data.map((item)=>{
                    return{
                        id:item.id,
                        name:item.attributes.brand_name
                    }
                });
                console.log(branData)
                setBrand(branData)
            }catch(e){
                console.log(e)
            }
        })
    },[]);
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const productData={
            product_name:productName,
            slug:slug,
            cat_id:catId,
            price:parseFloat(price) ,
            description:description,
            is_on_sale:isOnSale,
            sale_price:parseFloat(salePrice),
            image:[imageId],
            brand_id:parseInt(brandId) ,
            category:parseInt(catId)
        }
        console.log(productData);
        let file = new FormData();
        file.append("files", image);
        const fileObject=file.get("files");
        try {
            if(fileObject instanceof File){
                // console.log("Filr object name:", fileObject.name);
                if(fileObject !==""){
                    axiosInstace.enableUploadFile();
                    const res = await axiosInstace.post('/upload', file);
                    const fileId = res.data[0].id;
                    productData.image[0]=fileId;
                    console.log("File Id:",productData.image[0])
                }
                else{
                console.log("No file selected");
                 }
                
            
            } else{
                console.log("File object is not a file");
            }
    
            axiosInstace.enableJson();
            const responseProducts = await apiProduct.editProductById(id,{data:productData});
            console.log(responseProducts);
            alert('Sửa thành công');
            navigate("/admin/products/1");
        } catch (err) {
            console.log('Edit product error: ' + e);
        }
    };
    return(
        <div style={{width:"90%",margin:"auto"}}>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-3 mt-3">
                            <label for="product_name">Tên sản phẩm</label>
                            <input type="text" className="form-control" id="product_name"
                            placeholder="Nhập tên sản phẩm" name="product_name" 
                            value={productName} onChange={(e)=>setProductName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="slug">Slug</label>
                            <input type="text" className="form-control" id="slug"
                            placeholder="Nhập slug" name="slug"
                            value={slug} onChange={(e)=>setSlug(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="parent_id" className="form-lable">Danh mục cha</label>
                            <select className="form-control" name="parent_id"
                             value={catId} onChange={(e)=>setCatId(e.target.value)}>
                                {
                                    categories.map((category,index)=>{
                                        return(
                                            <option key={index} value={category.id}>{category.name}</option>
                                        )
                                        })
                                }

                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="price">Đơn giá</label>
                            <input type="text" className="form-control" id="price"
                            placeholder="Nhập giá" name="price" 
                            value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="description">Mô tả sản phẩm</label>
                            <textarea className="form-control" id="cat_id" placeholder="nhập mô tả sản phẩm"
                            name="description"
                            value={description} onChange={(e)=>setDescripton(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="col-md-5 mt-5">
                        <div className="mb-3">
                            <label for="sale" className="form-lable" style={{marginRight:"20px"}}>Giảm giá</label>
                            <input type="checkbox" className="form-check-input" id="is_on_sale" name="is_on_sale"
                             value={isOnSale} onChange={(e)=>setIsOnSale(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="product_name">Giá  khuyến mãi</label>
                            <input type="text" className="form-control" id="sale_price"
                            placeholder="Nhập giá khuyến mãi" name="sale_price"
                            value={salePrice} onChange={(e)=>setSalePrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="image">Hình ảnh</label>
                            <input type="file" className="form-control" id="image"
                            placeholder="Chọn hình ảnh" name="image"
                             onChange={(e)=>setImage(e.target.files[0])} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="brand_id" className="form-lable">Nhà cung cấp</label>
                            <select className="form-control" name="brand_name"
                             value={brandId} onChange={(e)=>setBrandId(e.target.value)}>
                                {
                                    brands.map((brand,index)=>{
                                        return(
                                            <option key={index} value={brand.id}>{brand.name}</option>
                                        )
                                    })
                                }
                             </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Sửa</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default EditProduct;