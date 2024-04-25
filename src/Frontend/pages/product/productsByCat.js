import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiProduct from "../../../api/apiProducts";
import ProductItem from "./productItem";
const ProductsByCat=()=>{
    const{slug}=useParams();
    const[productsByCat,setProductsByCat]=useState([]);
    useEffect(()=>{
        apiProduct.getProductByCategory(slug).then((res)=>{
            try{
                
                const data=res.data;
                console.log(data)
                const products=data.map((item)=>{
                    return{
                        id:item.id,
                        name:item.attributes.product_name,
                        price:item.attributes.price,
                        slug:item.attributes.slug,
                        image: item.attributes.image.data.attributes.url,
                    }
                })
                setProductsByCat(products);
            }catch(e){
                console.log(e)
            }
        })
    },[slug]);
    return(
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-9 product">
                    {/* start product */}
                        <div className="row">
                            {
                                productsByCat.map((product,index)=>{
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
export default ProductsByCat;