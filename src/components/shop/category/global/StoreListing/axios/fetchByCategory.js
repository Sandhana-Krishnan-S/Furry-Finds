import axios from "axios"

export const fetchDataByCategory = async (category , pageno , pageSize) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/products/get-product/by-category/${category}/${pageno}/${pageSize}`)
        console.log(response.data)
        if (response.status === 200) {
            const fetchedData = response.data;
            return {
                status : true,
                data : fetchedData.content,
                totalPages : fetchedData.totalPages
            }
        } else {
            console.error(`Unexpected response status: ${response.status}`);
            return {
                status :  false,
                data : 'Faild to fetch'
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            status : false,
            data : 'Something went wrong'
        }
    }
}