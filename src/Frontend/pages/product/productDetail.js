import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import apiProduct from '../../../api/apiProducts';
import { imageURL } from "../../../api/config";
import { UseDispatch, useDispatch } from "react-redux";
import { ADD } from "../../../redux/action/cartAction";
function ProductDetail(){
   
    const {slug}=useParams();
    const [ProductDetail,setProductDetail]=useState([]);
    const [amountItem,setAmountItem]=useState(1);
    const dispatch=useDispatch();
    useEffect(()=>{
        apiProduct.getDetailProductBySlug(slug).then((res)=>{
            try{
               console.log("productDetail", res.data)
               const ProductAttributes=res.data[0].attributes;
               const product={
                id:res.data[0].id,
                name:ProductAttributes.product_name,
                price:ProductAttributes.price,
                slug:ProductAttributes.slug,
                image:ProductAttributes.image.data.attributes.url,
                description:ProductAttributes.description,
               }
               setProductDetail(product);
               console.log(product);
            }catch(err){
                console.log("Error:",err);
            }
        });
    },[]);
    const handleAddToCart=(amountItem)=>{
        const product={
            ...ProductDetail,
            amount:amountItem
        }
        dispatch(ADD(product))
    }
    const increaseItemCart =()=>{
        setAmountItem(amountItem+1);
    }
    const decreaseItemCart=()=>{
        if(amountItem>1){
            setAmountItem(amountItem-1);
        }
    }
    return (
        <>
        
                <section className="bg-light">
        <div className="container pb-5">
            <div className="row">
                <div className="col-lg-5 mt-5">
                    <div className="card mb-3">
                        <img className="card-img img-fluid" src={imageURL+ProductDetail.image} alt={ProductDetail.name} id="product-detail"/>
                    </div>
                 
                </div>
                {/* <!-- col end --> */}
                <div className="col-lg-7 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3 py-2">{ProductDetail.name}</p>
                            <p className="h3 py-2">{ProductDetail.price}</p>
                            <p className="py-2">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                            </p>


                            <h6>Description:</h6>
                            <p>{ProductDetail.description}</p>

                          

                            
                                <input type="hidden" name="product-title" value="Activewear"/>
                                <div className="row">
                                   
                                    <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item text-right">
                                                Quantity
                                                <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-minus" 
                                            onClick={()=>decreaseItemCart()} >-</span></li>
                                            <li className="list-inline-item"><input type="number" id="quantity" value={amountItem}
                                            onChange={(e)=>setAmountItem(e.target.value)}/></li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-plus"
                                            onClick={()=>increaseItemCart()}>+</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                    </div>
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-success btn-lg" name="submit"
                                        onClick={()=>handleAddToCart(amountItem)}>Add To Cart</button>
                                    </div>
                                </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default ProductDetail;