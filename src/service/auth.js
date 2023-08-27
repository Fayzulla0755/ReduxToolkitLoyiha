import axios from "./api"

export const AuthService={
    async userRefister(user){
        const response= await axios.post('/users',{user})
        return response
    },
    async userLogin(){
        // const response= await axios.post('/users/login')

    },
    async getUser(){
        // const response= await axios.post('/user')

    }
}