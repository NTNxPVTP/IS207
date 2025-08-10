"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RotateCcw, RotateCw, Check, X } from "lucide-react"

interface ImageCropperProps {
  src: string
  onCropComplete: (croppedImage: File) => void
  onCancel: () => void
  isOpen: boolean
}

export function ImageCropper({ src, onCropComplete, onCancel, isOpen }: ImageCropperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 200, height: 200 })
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = useCallback(() => {
    if (imageRef.current) {
      const img = imageRef.current
      const containerWidth = 400
      const containerHeight = 300

      // Calculate initial crop size (50% of image, centered)
      const cropWidth = Math.min(img.naturalWidth * 0.5, containerWidth * 0.8)
      const cropHeight = Math.min(img.naturalHeight * 0.5, containerHeight * 0.8)

      setCrop({
        x: (img.naturalWidth - cropWidth) / 2,
        y: (img.naturalHeight - cropHeight) / 2,
        width: cropWidth,
        height: cropHeight,
      })
      setImageLoaded(true)
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (imageRef.current.naturalWidth / rect.width)
    const y = (e.clientY - rect.top) * (imageRef.current.naturalHeight / rect.height)

    setIsDragging(true)
    setDragStart({ x: x - crop.x, y: y - crop.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (imageRef.current.naturalWidth / rect.width)
    const y = (e.clientY - rect.top) * (imageRef.current.naturalHeight / rect.height)

    const newX = Math.max(0, Math.min(x - dragStart.x, imageRef.current.naturalWidth - crop.width))
    const newY = Math.max(0, Math.min(y - dragStart.y, imageRef.current.naturalHeight - crop.height))

    setCrop((prev) => ({ ...prev, x: newX, y: newY }))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleCropSizeChange = (dimension: "width" | "height", value: number) => {
    if (!imageRef.current) return

    const maxWidth = imageRef.current.naturalWidth - crop.x
    const maxHeight = imageRef.current.naturalHeight - crop.y

    setCrop((prev) => ({
      ...prev,
      [dimension]: Math.min(value, dimension === "width" ? maxWidth : maxHeight),
    }))
  }

  const getCroppedImage = useCallback(async (): Promise<File> => {
    if (!imageRef.current || !canvasRef.current) {
      throw new Error("Image or canvas not available")
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) throw new Error("Canvas context not available")

    const image = imageRef.current

    // Set canvas size to crop size
    canvas.width = crop.width
    canvas.height = crop.height

    // Apply transformations
    ctx.save()

    // Apply scale and rotation
    ctx.translate(crop.width / 2, crop.height / 2)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.scale(scale, scale)
    ctx.translate(-crop.width / 2, -crop.height / 2)

    // Draw the cropped portion
    ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height)

    ctx.restore()

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const file = new File([blob], "cropped-image.jpg", { type: "image/jpeg" })
            resolve(file)
          }
        },
        "image/jpeg",
        0.9,
      )
    })
  }, [crop, scale, rotation])

  const handleCropConfirm = async () => {
    try {
      const croppedImage = await getCroppedImage()
      onCropComplete(croppedImage)
    } catch (error) {
      console.error("Error cropping image:", error)
    }
  }

  const resetTransforms = () => {
    setScale(1)
    setRotation(0)
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => onCancel()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Crop Image</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Image Container */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: "400px" }}>
            <img
              ref={imageRef}
              src={src || "/placeholder.svg"}
              alt="Crop preview"
              className="w-full h-full object-contain cursor-move"
              style={{
                transform: `scale(${scale}) rotate(${rotation}deg)`,
                transformOrigin: "center",
              }}
              onLoad={handleImageLoad}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              draggable={false}
            />

            {/* Crop Overlay */}
            {imageLoaded && imageRef.current && (
              <div
                className="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-20"
                style={{
                  left: `${(crop.x / imageRef.current.naturalWidth) * 100}%`,
                  top: `${(crop.y / imageRef.current.naturalHeight) * 100}%`,
                  width: `${(crop.width / imageRef.current.naturalWidth) * 100}%`,
                  height: `${(crop.height / imageRef.current.naturalHeight) * 100}%`,
                  pointerEvents: "none",
                }}
              >
                {/* Corner handles */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 border border-white"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 border border-white"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 border border-white"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 border border-white"></div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Crop Size Controls */}
            <div className="space-y-3">
              <h4 className="font-medium">Crop Size</h4>
              <div className="space-y-2">
                <div>
                  <Label className="text-sm">Width: {Math.round(crop.width)}px</Label>
                  <Slider
                    value={[crop.width]}
                    onValueChange={([value]) => handleCropSizeChange("width", value)}
                    max={imageRef.current?.naturalWidth || 500}
                    min={50}
                    step={1}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm">Height: {Math.round(crop.height)}px</Label>
                  <Slider
                    value={[crop.height]}
                    onValueChange={([value]) => handleCropSizeChange("height", value)}
                    max={imageRef.current?.naturalHeight || 500}
                    min={50}
                    step={1}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Transform Controls */}
            <div className="space-y-3">
              <h4 className="font-medium">Adjustments</h4>
              <div className="space-y-2">
                <div>
                  <Label className="text-sm">Scale: {scale.toFixed(2)}x</Label>
                  <Slider
                    value={[scale]}
                    onValueChange={([value]) => setScale(value)}
                    max={3}
                    min={0.5}
                    step={0.1}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm">Rotation: {rotation}°</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Button variant="outline" size="sm" onClick={() => setRotation((prev) => prev - 90)}>
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[rotation]}
                      onValueChange={([value]) => setRotation(value)}
                      max={360}
                      min={-360}
                      step={1}
                      className="flex-1"
                    />
                    <Button variant="outline" size="sm" onClick={() => setRotation((prev) => prev + 90)}>
                      <RotateCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={resetTransforms} className="w-full bg-transparent">
                Reset Transforms
              </Button>
            </div>
          </div>

          {/* Preset Aspect Ratios */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Aspect Ratios</Label>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "1:1", ratio: 1 },
                { label: "4:3", ratio: 4 / 3 },
                { label: "16:9", ratio: 16 / 9 },
                { label: "3:4", ratio: 3 / 4 },
                { label: "9:16", ratio: 9 / 16 },
              ].map(({ label, ratio }) => (
                <Button
                  key={label}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (imageRef.current) {
                      const maxSize = Math.min(imageRef.current.naturalWidth, imageRef.current.naturalHeight) * 0.8
                      const width = ratio >= 1 ? maxSize : maxSize * ratio
                      const height = ratio >= 1 ? maxSize / ratio : maxSize

                      setCrop((prev) => ({
                        ...prev,
                        width,
                        height,
                        x: (imageRef.current!.naturalWidth - width) / 2,
                        y: (imageRef.current!.naturalHeight - height) / 2,
                      }))
                    }
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={onCancel}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleCropConfirm}>
              <Check className="mr-2 h-4 w-4" />
              Apply Crop
            </Button>
          </div>
        </div>

        {/* Hidden canvas for cropping */}
        <canvas ref={canvasRef} className="hidden" />
      </DialogContent>
    </Dialog>
  )
}
