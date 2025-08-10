"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ImageIcon, Edit, X } from "lucide-react"
import Image from "next/image"
import { ImageCropper } from "./image-cropper"

interface ImageUploadWithCropProps {
  value: File | null
  onChange: (file: File | null) => void
  preview?: string
}

export function ImageUploadWithCrop({ value, onChange, preview }: ImageUploadWithCropProps) {
  const [dragActive, setDragActive] = useState(false)
  const [showCropper, setShowCropper] = useState(false)
  const [tempImageSrc, setTempImageSrc] = useState<string>("")

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setTempImageSrc(e.target.result as string)
          setShowCropper(true)
        }
      }
      reader.readAsDataURL(file)
    } else {
      alert("Please select an image file")
    }
  }

  const handleCropComplete = (croppedFile: File) => {
    onChange(croppedFile)
    setShowCropper(false)
    setTempImageSrc("")
  }

  const handleCropCancel = () => {
    setShowCropper(false)
    setTempImageSrc("")
  }

  const removeImage = () => {
    onChange(null)
  }

  const editImage = () => {
    if (value) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setTempImageSrc(e.target.result as string)
          setShowCropper(true)
        }
      }
      reader.readAsDataURL(value)
    } else if (preview) {
      setTempImageSrc(preview)
      setShowCropper(true)
    }
  }

  const currentImageSrc = value ? URL.createObjectURL(value) : preview

  return (
    <div className="space-y-4">
      {currentImageSrc ? (
        <div className="relative">
          <div className="relative w-full h-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
            <Image src={currentImageSrc || "/placeholder.svg"} alt="Product preview" fill className="object-cover" />
          </div>
          <div className="absolute top-2 right-2 flex space-x-1">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={editImage}
              className="bg-white/90 hover:bg-white"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={removeImage}
              className="bg-red-500/90 hover:bg-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`relative w-full h-48 border-2 border-dashed rounded-lg transition-colors cursor-pointer ${
            dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
            <ImageIcon className="h-12 w-12 mb-4" />
            <p className="text-sm font-medium">Drop image here or click to upload</p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB</p>
            <p className="text-xs text-blue-500 mt-2">Click edit after upload to crop image</p>
          </div>
        </div>
      )}

      {/* Image Cropper Modal */}
      <ImageCropper
        src={tempImageSrc || "/placeholder.svg"}
        isOpen={showCropper}
        onCropComplete={handleCropComplete}
        onCancel={handleCropCancel}
      />
    </div>
  )
}
