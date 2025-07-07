'use client'
import React from 'react'
import { toast } from 'react-toastify';
 const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME
 const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string
export default function ImageUpload({ setImages, inputRef }:
  {
    setImages: React.Dispatch<React.SetStateAction< string []>>,
    inputRef?: React.RefObject<HTMLInputElement | null>
  }) {
    
 
  const handleOnChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return toast.error("please upload image");

    const uploadedImages: string[] = []
    for (const file of Array.from(files)) {
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
       try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
         if (data.secure_url) {
           uploadedImages.push(data.secure_url);
        
        } else {
          console.error('Upload failed:', data);
          toast.error('Upload failed');
        }
      } catch (err) {
        console.error('Error uploading image:', err);
        toast.error('Error uploading image');
      }

    }

    if (uploadedImages.length > 0) {
      setImages(prev => [...prev, ...uploadedImages])
      toast.success(`${uploadedImages.length} image(s) uploaded successfully`);
    }
  };
  return (
    <div className="w-full max-w-3xl mx-auto my-4 px-4">
      <input
      ref={inputRef}
        type="file"
        multiple
        onChange={handleOnChange}
        accept="image/*"
        name="images"
        className='hidden w-full  input-accent file-input file-input-accent rounded-md  '
      />
    </div>
  )
}

async function getFileHash(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
