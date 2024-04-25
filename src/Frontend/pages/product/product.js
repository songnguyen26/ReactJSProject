import React,{useEffect,useState} from "react";
import apiProduct from '../../../api/apiProducts';
import ProductItem from "./productItem";
import axiosInstace from "../../../api/axios";
import apiBrand from "../../../api/apiBrand";
import { Link } from "react-router-dom";
function Products(){
    const[products,setProducts]=useState([]);
    
    useEffect(()=>{
        
        apiProduct.getAll().then((res)=>{
            try{
                // console.log("res",res.data)
                const productData=res.data.map((product)=>{
                    return{
                        id:product.id,
                        name:product.attributes.product_name,
                        price:product.attributes.price,
                        slug:product.attributes.slug,
                        image: product.attributes.image.data.attributes.url,
                    };
                });
                setProducts(productData);
                console.log("product:",productData);

            }catch(err){
                console.log("Error:",err);
            }
        });
    },[]);
    return(
        <>
        {/* <!-- Modal --> */}
<div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg" role="document">
<div className="w-100 pt-1 mb-5 text-right">
   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<form action="" method="get" className="modal-content modal-body border-0 p-0">
   <div className="input-group mb-2">
       <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
       <button type="submit" className="input-group-text bg-success text-light">
           <i className="fa fa-fw fa-search text-white"></i>
       </button>
   </div>
</form>
</div>
</div>



{/* <!-- Start Content --> */}
<div className="container py-5">
<div className="row">



<div className="col-lg-9 product">
    <div className="col-md-6 pb-4">
        <div className="d-flex">
                                     
            
        </div>
    </div>
   {/* start product */}
   <div className="row">
       {
        products.map((product,index)=>{
            return(
                <ProductItem key={index} product={product}/>
            )
        })
       }
       
       
       
       
       
       </div>
 
   </div>
   
</div>


</div>
{/* <!-- End Content --> */}

{/* <!-- Start Brands --> */}
<section className="bg-light py-5">
<div className="container my-4">
<div className="row text-center py-3">
   <div className="col-lg-6 m-auto">
       <h1 className="h1">Our Brands</h1>
       <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
           Lorem ipsum dolor sit amet.
       </p>
   </div>
   <div className="col-lg-9 m-auto tempaltemo-carousel">
       <div className="row d-flex flex-row">
           {/* <!--Controls--> */}
           <div className="col-1 align-self-center">
               <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                   <i className="text-light fas fa-chevron-left"></i>
               </a>
           </div>
           {/* <!--End Controls--> */}

           {/* <!--Carousel Wrapper--> */}
           <div className="col">
               <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                   {/* <!--Slides--> */}
                   <div className="carousel-inner product-links-wap" role="listbox">

                       {/* <!--First slide--> */}
                       <div className="carousel-item active">
                           <div className="row">
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                               </div>
                           </div>
                       </div>
                       {/* <!--End First slide--> */}

                       {/* <!--Second slide--> */}
                       <div className="carousel-item">
                           <div className="row">
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                               </div>
                           </div>
                       </div>
                       {/* <!--End Second slide--> */}

                       {/* <!--Third slide--> */}
                       <div className="carousel-item">
                           <div className="row">
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                               </div>
                               <div className="col-3 p-md-5">
                                   <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                               </div>
                           </div>
                       </div>
                       {/* <!--End Third slide--> */}

                   </div>
                   {/* <!--End Slides--> */}
               </div>
           </div>
           {/* <!--End Carousel Wrapper--> */}

           {/* <!--Controls--> */}
           <div className="col-1 align-self-center">
               <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                   <i className="text-light fas fa-chevron-right"></i>
               </a>
           </div>
           {/* <!--End Controls--> */}
       </div>
   </div>
</div>
</div>
</section>
{/* <!--End Brands--> */}
</>
    )
}
export default Products;
