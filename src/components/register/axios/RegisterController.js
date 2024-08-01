import axios from "axios";
import { baseUrl } from "../../../private/Urls";

export const RegisterController = async (userName, userEmail, userPassword) => {
    try {
        const response = await axios.post(`${baseUrl}auth/register`, {
            name: userName,
            email: userEmail,
            password: userPassword
        });

        if (response.status === 201) {
            localStorage.setItem('userData', JSON.stringify(response.data));
            return {
                status: true,
                message: 'Registration successful'
            }
        } else {
            return {
                status: false,
                message: `Unexpected response status: ${response.status}`
            }
        }
    } catch (error) {
        if (error.response) {
            return {
                status: false,
                message: error.response.data || 'An error occurred during registration'
            }
        } else {
            console.log(error)
            return {
                status: false,
                message: 'somethig went wrong'
            }
        }
    }
}
