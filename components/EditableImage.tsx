import React, { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon, Edit2 } from 'lucide-react';

interface EditableImageProps {
  imageSrc: string;
  onImageUpdate: (newImage: string) => void;
  isAdmin: boolean;
  className?: string;
  placeholderText?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ 
  imageSrc, 
  onImageUpdate, 
  isAdmin, 
  className = '',
  placeholderText = "Upload Image"
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const processFile = (file: File | undefined) => {
    if (!file) return;

    // Check size (limit to ~2MB for localStorage safety)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image is too large! Please use an image under 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        onImageUpdate(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (isAdmin) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!isAdmin) return;
    
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const triggerUpload = () => {
    if (isAdmin) fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Remove this image?")) {
      onImageUpdate('');
    }
  };

  // If NOT admin and NO image, render nothing
  if (!isAdmin && !imageSrc) {
    return null;
  }

  return (
    <div 
      className={`relative group overflow-hidden transition-all duration-300 ${className} ${isAdmin ? 'cursor-pointer' : ''} ${isDragging ? 'ring-4 ring-cyber-red scale-[1.02]' : ''}`}
      onClick={triggerUpload}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {imageSrc ? (
        <>
          <img 
            src={imageSrc} 
            alt="Editable Content" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
          {isAdmin && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="text-white flex flex-col items-center gap-2">
                <Edit2 size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">Change Image</span>
              </div>
              <button 
                onClick={handleRemove}
                className="absolute top-2 right-2 p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors text-white z-10"
                title="Remove Image"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </>
      ) : (
        // Admin Placeholder State
        <div className={`w-full h-full flex flex-col items-center justify-center bg-neutral-900 border-2 border-dashed border-white/20 hover:border-cyber-red/50 hover:bg-neutral-800 transition-all group-hover:scale-[1.02] p-6 text-center ${isDragging ? 'bg-neutral-800 border-cyber-red' : ''}`}>
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyber-red mb-3 group-hover:bg-cyber-red group-hover:text-white transition-colors">
            {isDragging ? <Upload size={24} /> : <ImageIcon size={24} />}
          </div>
          <span className="text-gray-400 font-bold text-sm uppercase tracking-wide group-hover:text-white">
            {isDragging ? "Drop to Upload" : placeholderText}
          </span>
          <span className="text-gray-600 text-[10px] mt-1">
            Max 2MB • Drag & Drop
          </span>
        </div>
      )}
    </div>
  );
};

export default EditableImage;