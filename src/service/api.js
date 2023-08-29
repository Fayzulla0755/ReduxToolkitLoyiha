import axios from "axios"
import { getItem } from "../helpers/persistance-storage"
axios.defaults.baseURL = "https://api.realworld.io/api"
axios.interceptors.request.use(config=>{
    const token = getItem('token')
    console.log(token);
    const authoration = token ? `Token ${token}`:''
    config.headers.Authorization= authoration
    return config
})


export default axios
