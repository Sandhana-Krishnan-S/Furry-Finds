import axios from "axios";
import { baseUrl } from "../../../private/Urls";

export const loginController = async (userEmail , userPassword) => {
    try {
        const response = await axios.post(`${baseUrl}auth/login`, {
            "email": userEmail,
            "password": userPassword
        })
    
        if(response.status === 200) {
            localStorage.setItem('userData' , JSON.stringify(response.data))
            return {
                status : true ,
                message : 'success'
            }
        }
        return {
            status : false ,
            message : 'Email or Password is Invalid'
        }
    } catch (error) {
        // console.log(error)
        if(error.response.status === 401) {
            return {
                status : false ,
                message : 'Email or Password is Invalid'
            }
        }
        return {
            status : false ,
            message : 'Something went wrong'
        }
    }
}