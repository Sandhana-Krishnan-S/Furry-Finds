import React, { useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
    const [dataName, setDataName] = useState('');
    const [file, setFile] = useState(null);
    const [isload , setIsLoad] = useState(false)

    const sendFile = async () => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64String = reader.result.split(',')[1];
            try {
                const response = await axios.post('http://localhost:8080/test/upload', {
                    img: base64String,
                    name: dataName
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data);
                setFile(`data:image/png;base64,${response.data.img}`)
                setIsLoad(true)
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        };
        reader.onerror = (error) => {
            console.error('Error reading file:', error);
        };
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="Name" onChange={(e) => setDataName(e.target.value)} />
                <input
                    type="file"
                    name="myImage"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input type="button" value="Send" onClick={sendFile} />
            </form>
            <div>
                {isload ? 
                <div>
                    <img src={file} alt="" />
                </div> : <div>
                        <h1>Upload File</h1>
                    </div>}
            </div>
        </div>
    );
}
