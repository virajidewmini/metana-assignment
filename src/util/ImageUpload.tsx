"use client";
import React, { useState, DragEvent } from 'react';

const ImageUpload: React.FC = () => {
    const [image, setImage] = useState<string | null>(null); // Type annotation for state

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    border: '2px dashed #ccc',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}
            >
                {image ? (
                    <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
                ) : (
                    <p>Drag and drop an image or click to upload</p>
                )}
            </div>
            <input type="file" accept="image/*" onChange={handleUpload} />
        </div>
    );
};

export default ImageUpload;
