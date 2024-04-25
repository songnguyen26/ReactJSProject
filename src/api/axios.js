import axios from "axios";
import {apiURL} from './config';

const axiosInstace=axios.create({
    baseURL:apiURL,
    timeout:1000,
    headers:{
        "Content-Type": "application/json",
    }
})
axiosInstace.enableUploadFile=()=>{
    axiosInstace.defaults.headers[`Content-Type`]=`multipart/form-data`;
};
axiosInstace.enableJson=()=>{
    axiosInstace.defaults.headers[`Content-Type`]=`application/json`;
};
export default axiosInstace;