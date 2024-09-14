// src/components/ImageUpload.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        axios.post('http://127.0.0.1:8000/api/upload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            setUploadedImages([...uploadedImages, response.data]);
        })
        .catch(error => {
            console.error('There was an error uploading the image!', error);
        });
    };

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`)
        .then(() => {
            setUploadedImages(uploadedImages.filter(image => image.id !== id));
        })
        .catch(error => {
            console.error('There was an error deleting the image!', error);
        });
    };

    return (

        <>
        <div className='items-center pl-8 pb-4 text-white bg-black'>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

          
               
         
        </div>
        <hr />

        <h2 className='pt-6 text-center  bg-black text-white py-4'>Uploaded Images</h2>

        <div className="    justify-center grid grid-cols-5 gap-4">
        {uploadedImages.map((image) => (
                    <div  key={image.id} className='border border-gray-400 mt-4 '>
                        <img  src={`http://127.0.0.1:8000${image.image}`} alt={image.id} width="200px" className='' />
                        <button className='ml-16 border-2 text-white bg-black ' onClick={() => handleDelete(image.id)}>Delete</button>
                    </div>
                ))}

        </div>


        </>

      
    );
};

export default ImageUpload;
