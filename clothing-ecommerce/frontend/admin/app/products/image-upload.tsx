"use client";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { useDropzone } from "react-dropzone";

export default function AvatarUploader() {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  // Xử lý chọn ảnh (click hoặc drag-drop)
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  // Lấy vùng crop
  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Hàm chuyển crop → ảnh file
  async function createImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous");
      image.src = url;
    });
  }

  async function getCroppedImg(imageSrc, crop) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    });
  }

  // Xử lý khi nhấn lưu ảnh
  const handleSave = async () => {
    const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
    setCroppedImage(URL.createObjectURL(croppedBlob));

    // 🚀 Gửi blob này lên backend:
    // const formData = new FormData();
    // formData.append("avatar", croppedBlob, "avatar.jpg");
    // await fetch("/api/upload", { method: "POST", body: formData });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!imageSrc && (
        <div
          {...getRootProps()}
          className={`w-64 h-64 border-2 border-dashed rounded-full flex items-center justify-center cursor-pointer ${
            isDragActive ? "bg-blue-50" : ""
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-center">
            {isDragActive ? "Thả ảnh vào đây..." : "Click hoặc kéo-thả ảnh"}
          </p>
        </div>
      )}

      {imageSrc && !croppedImage && (
        <div className="relative w-64 h-64 bg-gray-200 rounded-full overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
      )}

      {imageSrc && !croppedImage && (
        <div className="flex gap-2 mt-2">
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Lưu ảnh
          </button>
        </div>
      )}

      {croppedImage && (
        <div className="flex flex-col items-center gap-2">
          <img
            src={croppedImage}
            alt="Cropped Avatar"
            className="w-32 h-32 rounded-full object-cover"
          />
          <button
            onClick={() => {
              setImageSrc(null);
              setCroppedImage(null);
            }}
            className="px-3 py-1 bg-gray-500 text-white rounded"
          >
            Chọn ảnh khác
          </button>
        </div>
      )}
    </div>
  );
}
