'use client'
import { useCallback, useState } from 'react'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'
import Button from '../Button/Button'

export function FileUploader({ onFieldChange }) {
  const [imageUrls, setImageUrls] = useState([])

  // Function to upload images to Cloudinary
  const uploadToCloudinary = async (file) => {
    const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET; // Access environment variable
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`; // Access environment variable

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      return result.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    const uploadPromises = acceptedFiles.map(async (file) => {
      const url = await uploadToCloudinary(file);
      return url;
    });

    const newImageUrls = await Promise.all(uploadPromises);
    const updatedImageUrls = [...imageUrls, ...newImageUrls.filter(url => url !== null)];

    setImageUrls(updatedImageUrls);
    localStorage.setItem('uploadedImages', JSON.stringify(updatedImageUrls));

    if (newImageUrls[0]) {
      onFieldChange(newImageUrls[0]);
    }
  }, [imageUrls, onFieldChange]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(['image/*']),
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50">
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrls.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`uploaded-${index}`}
              width={250}
              height={250}
              className="m-2 w-60 object-cover object-center"
            />
          ))}
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <img src="/assets/icons/upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
