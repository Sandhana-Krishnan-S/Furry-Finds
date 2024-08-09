import axios from "axios"

export const fetchData = ({category , pageno , pageSize}) => {
    try {
        const response = axios.get(`http://localhost:8080/api/products/get-product/by-category/FOOD`)
        if(response.status === 200) {
            const parsedResponce = JSON.stringify(response.data)
            return parsedResponce
        }
    } catch (error) {
        
    }
}