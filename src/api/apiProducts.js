import axiosInstace from "./axios";

const apiProduct={
    getAll: () => {
        return axiosInstace.get("/products?populate=*").then((res)=>res.data);
    },
    //get fice newest products
    getNewest: () =>{
        return axiosInstace.get("/products?sort[0]=createdAt:desc&pagination[limit]=5&populate=*").then((res)=>res.data);
    },
    //get 6 sale products
    getPromotion: ()=>{
        return axiosInstace.get("/products?filter[is_on_sale]=true&pagination[limit]=6&populate=*").then((res)=>res.data);
    },
    getDetailProductBySlug:(slug)=>{
        return axiosInstace.get(`/products?filters[slug][$eq]=${slug}&populate=*`).then((res)=>res.data);
    },
    //get product by category
    getProductByCategory:(slug)=>{  
        return axiosInstace.get(`/products?filters[category][slug][$eq]=${slug}&populate=*`).then((res)=>res.data)
    },
    //lấy sản phẩm phân trang
    getProductPagination:(page,limit)=>{
        return axiosInstace.get(`/products?pagination[page]=${page}&pagination[pageSize]=${limit}&populate=*`).then((res)=>res.data)
    },
    //create product
    createProduct:(data)=>{
        return  axiosInstace.post("/products",data)
    },
    getProductById:(id)=>{
        return axiosInstace.get(`/products/${id}?populate=*`).then((res)=>res.data)
    },
    editProductById:(id,data)=>{
        return axiosInstace.put(`products/${id}`,data)
    },
    delProduct:(id)=>{
        return axiosInstace.delete(`/products/${id}`)
    },
    getProductByBrand:(id)=>{
        return axiosInstace.get(`/products?filters[brand_id][$eq]=${id}&populate=*`).then((res)=>res.data)
    }
}
export default apiProduct;