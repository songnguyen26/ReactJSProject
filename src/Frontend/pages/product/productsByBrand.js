import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiProduct from "../../../api/apiProducts";
import ProductItem from "./productItem";
function ProductsByBrand(){
    const {id}=useParams();
    const[productsByBrand,setProductsByBrand]=useState([]);
    useEffect(()=>{
        apiProduct.getProductByBrand(id).then(res=>{
            try{
                console.log(res)
                const products=res.data.map((item)=>{
                    return{
                        id:item.id,
                        name:item.attributes.product_name,
                        price:item.attributes.price,
                        slug:item.attributes.slug,
                        image: item.attributes.image.data.attributes.url,
                    }
                })
                setProductsByBrand(products)
            }catch(e){
                console.log(e);
            }
        })
    },[id])
    return(
        <>
        
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-9 product">
                {/* start product */}
                    <div className="row">
                        
                        {
                            productsByBrand.map((product,index)=>{
                                return(
                                    <ProductItem key={index} product={product}/>
                                )
                            })
                        
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default ProductsByBrand