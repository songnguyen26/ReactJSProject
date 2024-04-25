import React from "react";
import {Link} from "react-router-dom";
import { imageURL } from "../../../api/config";
function ProductItem(props){
    return(
        <div className="col-md-4 " key={props.key}>
            
            <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={imageURL+props.product.image}/>
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white" href="#"><i className="far fa-heart"></i></a></li>
                                        <li><Link to={`/product-detail/${props.product.slug}`} key={props.key}><a className="btn btn-success text-white mt-2" href="#"><i className="far fa-eye"></i></a></Link></li>
                                        <li><a className="btn btn-success text-white mt-2" href="#"><i className="fas fa-cart-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body link">
                                <a  className="h3 text-decoration-none">{props.product.name}</a>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    
                                    <li className="pt-2">
                                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p className="text-center mb-0" key={props.key}>{props.product.price}</p>
                            </div>
                        </div>
                
           
        </div>
    );{/* <img src={imageURL+props.product.image} alt={props.product.product_name }   />
                <h5 className="card-title">{props.product.name}</h5>
                <h6 key={props.key}>{props.product.price}</h6> */}
}
export default ProductItem;