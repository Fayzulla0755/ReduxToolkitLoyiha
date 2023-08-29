import axios from "axios"
import { getItem } from "../helpers/persistance-storage"
axios.defaults.baseURL = "https://api.realworld.io/api"
axios.interceptors.request.use(config=>{
    const token = getItem('token')
    const authoration = token ? `Token ${token}`:''
    config.headers.Authorization= authoration
    return config
})
export const AuthService={
    async userRefister(user){
        const {data}= await axios.post('/users',{user})
        return data
    },
    async userLogin(user){
        const {data}= await axios.post('/users/login',{user})
        return data

    },
    async getUser(){
        const {data}= await axios.get('/user')
return data

    }
}