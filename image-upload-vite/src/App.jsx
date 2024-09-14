// src/App.jsx
import React from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';

function App() {
    return (
        <div className="App  ">
            <h1 className='  m-4 text-center text-2xl text-white border-4 rounded-full bg-black p-4'>Image Upload</h1>
            <ImageUpload />
        </div>
    );
}

export default App;
