// import React, { useState } from 'react';
// import axios from 'axios';

// export default function FileUpload() {
//     const [dataName, setDataName] = useState('');
//     const [file, setFile] = useState(null);
//     const [isload , setIsLoad] = useState(false)

//     const sendFile = async () => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = async () => {
//             const base64String = reader.result.split(',')[1];
//             try {
//                 const response = await axios.post('http://localhost:8080/test/upload', {
//                     imgVal: base64String,
//                     title: dataName
//                 }, {
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 console.log(response.data);
//                 setFile(`data:image/png;base64,${response.data.img}`)
//                 setIsLoad(true)
//             } catch (error) {
//                 console.error('Error uploading file:', error);
//             }
//         };
//         reader.onerror = (error) => {
//             console.error('Error reading file:', error);
//         };
//     };

//     return (
//         <div>
//             <form>
//                 <input type="text" placeholder="Name" onChange={(e) => setDataName(e.target.value)} />
//                 <input
//                     type="file"
//                     name="myImage"
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />
//                 <input type="button" value="Send" onClick={sendFile} />
//             </form>
//             <div>
//                 {isload ? 
//                 <div>
//                     <img src={file} alt="" />
//                 </div> : <div>
//                         <h1>Upload File</h1>
//                     </div>}
//             </div>
//         </div>
//     );
// }


import axios from 'axios';
import React, { useState } from 'react';

const FileUpload = () => {
    const [dataName, setDataName] = useState("");
    const [store, setStore] = useState("");
    const [category, setCategory] = useState("FOOD");
    const [totalReview, setTotalReview] = useState(0);
    const [rating, setRating] = useState(0);
    const [prodDescription, setProdDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const sendFile = () => {
        const formData = new FormData();
        formData.append('title', dataName);
        formData.append('store', store);
        formData.append('category', category);
        formData.append('totalReview', totalReview);
        formData.append('rating', rating);
        formData.append('prodDescription', prodDescription);
        formData.append('price', price);
        formData.append('myImage', file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64String = reader.result.split(',')[1];
            try {
                const response = await axios.post('http://localhost:8080/api/products/add-product', {
                    imgVal: base64String,
                    title: dataName,
                    store: store,
                    category: category,
                    totalReview: totalReview,
                    rating: rating,
                    prodDescription: prodDescription,
                    price: price
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data);
            } catch (e) {
                if (e.response && e.response.status === 409) {
                    console.log("Conflict: The product already exists or there's a duplicate entry.", e.response.data);
                } else {
                    console.log("Failed to upload the product", e);
                }
            }
        };
    };

    return (
        <form>
            <input type="text" placeholder="Name" onChange={(e) => setDataName(e.target.value)} />
            <input type="text" placeholder="Store" onChange={(e) => setStore(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="number" placeholder="Total Reviews" onChange={(e) => setTotalReview(e.target.value)} />
            <input type="number" step="0.1" placeholder="Rating" onChange={(e) => setRating(e.target.value)} />
            <textarea placeholder="Product Description" onChange={(e) => setProdDescription(e.target.value)}></textarea>
            <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
            <input
                type="file"
                name="myImage"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <input type="button" value="Send" onClick={sendFile} />
        </form>
    );
};

export default FileUpload;
