"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Plus, Edit, ChevronDown } from "lucide-react"
import Image from "next/image"

// Multi Select Component with Search Filter
function MultiSelectCategories({ value, onChange, placeholder = "Select categories..." }) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [categories, setCategories] = useState([]) // <-- state

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/admin/categories")
      const data = await res.json()
      // Giả sử API trả về [{ id_category: "uuid", name: "T-Shirts", parent_id: null }, ...]
      console.log(data)
      setCategories(data)
      // Nếu muốn giữ cả id thì giữ nguyên data
    } catch (err) {
      console.error("Lỗi load categories:", err)
    }
  }
  useEffect(() => {
    fetchCategories()
  }, [])
  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Chọn / bỏ chọn category
  const handleSelect = (category) => {
    const exists = value.some((c) => c.id_category === category.id_category)
    const newValue = exists ? value.filter((c) => c.id_category !== category.id_category) : [...value, category]
    onChange(newValue)
  }

  // Xóa category đã chọn
  const removeCategory = (id) => {
    onChange(value.filter((c) => c.id_category !== id))
  }

  // Clear search khi đóng popover
  const handleOpenChange = (isOpen) => {
    setOpen(isOpen)
    if (!isOpen) {
      setSearchTerm("")
    }
  }

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-transparent"
          >
            {value.length === 0 ? placeholder : `${value.length} categories selected`}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <div className="p-2">
            {/* Search Input */}
            <div className="relative mb-2">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 h-9"
                autoFocus
              />
            </div>

            {/* Categories List */}
            <div className="max-h-48 overflow-y-auto">
              {filteredCategories.length === 0 ? (
                <div className="p-2 text-sm text-muted-foreground text-center">No categories found</div>
              ) : (
                filteredCategories.map((category) => (
                  <div
                    key={category.id_category}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <Checkbox
                      id={category.id_category}
                      checked={value.some((c) => c.id_category === category.id_category)}
                      onCheckedChange={() => handleSelect(category)}
                    />
                    <Label htmlFor={category.id_category} className="flex-1 cursor-pointer">
                      {category.name}
                    </Label>
                  </div>
                ))
              )}
            </div>

            {/* Quick Actions */}
            {value.length > 0 && (
              <div className="border-t pt-2 mt-2">
                <Button variant="ghost" size="sm" onClick={() => onChange([])} className="w-full text-xs">
                  Clear All ({value.length})
                </Button>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>

      {/* Selected categories display */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {value.map((category) => (
            <Badge key={category.id_category} variant="secondary" className="text-xs">
              {category.name}
              <Button
                variant="ghost"
                size="sm"
                className="ml-1 h-auto p-0 text-muted-foreground hover:text-foreground"
                onClick={() => removeCategory(category.id_category)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    categories: [], // Changed to array
    stock_quantity: "",
    imageFile: null, // To store the File object
    imagePreviewUrl: null, // To store the URL for preview
  })

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      categoryFilter === "all" ||
      (product.categories && product.categories.some((c) => c.id_category === categoryFilter))

    return matchesSearch && matchesCategory && product.status !== "deleted"
  })

  const handleImageChange = (e, isEditing = false) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      if (isEditing) {
        setEditingProduct((prev) => ({
          ...prev,
          imageFile: file,
          imagePreviewUrl: url,
        }))
      } else {
        setNewProduct({
          ...newProduct,
          imageFile: file,
          imagePreviewUrl: url,
        })
      }
    } else {
      if (isEditing) {
        setEditingProduct((prev) => ({
          ...prev,
          imageFile: null,
          imagePreviewUrl: prev?.image_url || null, // Revert to original image if no new file selected
        }))
      } else {
        setNewProduct({
          ...newProduct,
          imageFile: null,
          imagePreviewUrl: null,
        })
      }
    }
  }

  const handleAddProduct = async () => {
    try {
      const formData = new FormData()
      formData.append("name", newProduct.name)
      formData.append("description", newProduct.description)
      formData.append("price", newProduct.price)
      formData.append("stock_quantity", newProduct.stock_quantity)
      formData.append("categories", JSON.stringify(newProduct.categories.map((c) => c.id_category))) // Send categories as JSON string

      if (newProduct.imageFile) {
        formData.append("image", newProduct.imageFile)
      }

      const response = await fetch("http://127.0.0.1:8000/admin/products", {
        method: "POST",
        // No 'Content-Type' header needed for FormData, browser sets it automatically
        body: formData,
      })
      if (!response.ok) {
        throw new Error("Lỗi khi thêm sản phẩm")
      }
      const savedProduct = await response.json()
      console.log("Đã thêm sản phẩm:", savedProduct)

      // Reset form
      setNewProduct({
        name: "",
        description: "",
        price: "",
        categories: [],
        stock_quantity: "",
        imageFile: null,
        imagePreviewUrl: null,
      })
      setIsAddDialogOpen(false)

      // Sau khi thêm thành công, load lại danh sách
      await getProducts()
      setMessage("Thêm sản phẩm thành công!")
    } catch (error) {
      console.error("Lỗi thêm sản phẩm:", error)
      setMessage("Không thể thêm sản phẩm.")
    }
  }

  const handleEditProduct = async () => {
    try {
      let response
      if (editingProduct.imageFile) {
        // If a new image file is selected, send as FormData
        const formData = new FormData()
        formData.append("name", editingProduct.name)
        formData.append("description", editingProduct.description)
        formData.append("price", editingProduct.price)
        formData.append("stock_quantity", editingProduct.stock_quantity)
        formData.append("categories", JSON.stringify(editingProduct.categories.map((c) => c.id_category)))
        formData.append("image", editingProduct.imageFile) // Append the new image file

        response = await fetch(`http://127.0.0.1:8000/admin/products/${editingProduct.id_product}`, {
          method: "PUT",
          body: formData, // No Content-Type header for FormData
        })
      } else {
        // If no new image file, send as JSON
        const productToUpdate = {
          ...editingProduct,
          price: Number.parseFloat(editingProduct.price),
          stock_quantity: Number.parseInt(editingProduct.stock_quantity),
          // Ensure image_url is sent if it exists and no new file is selected
          image_url: editingProduct.imagePreviewUrl,
        }
        response = await fetch(`http://127.0.0.1:8000/admin/products/${editingProduct.id_product}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productToUpdate),
        })
      }

      if (!response.ok) {
        throw new Error("Lỗi khi cập nhật sản phẩm")
      }
      const updatedProduct = await response.json()
      console.log("Đã cập nhật:", updatedProduct)
      setMessage("Cập nhật sản phẩm thành công!")
      setEditingProduct(null)
      // Làm mới danh sách
      await getProducts()
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error)
      setMessage("Không thể cập nhật sản phẩm.")
    }
  }

  const handleToggleVisibility = async (productId, currentVisibility) => {
    console.log(productId)
    try {
      const response = await fetch(`http://127.0.0.1:8000/admin/products/${productId}/toggle-visibility`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_visible: currentVisibility === 1 ? 0 : 1,
        }),
      })
      if (!response.ok) {
        throw new Error("Lỗi khi thay đổi trạng thái hiển thị")
      }
      const updated = await response.json()
      console.log("Đã cập nhật is_visible:", updated)
      // Cập nhật lại danh sách
      await getProducts()
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái hiển thị:", error)
      setMessage("Không thể thay đổi trạng thái sản phẩm.")
    }
  }

  const [message, setMessage] = useState("")

  const getProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/admin/products")
      const data = await response.json()
      console.log("Dữ liệu từ API:", data)
      setProducts(data)
    } catch (error) {
      console.error("Lỗi gọi API:", error)
      setMessage("Có lỗi xảy ra!")
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  // Get unique categories for filter dropdown
  const allCategories = Array.from(
    new Map(
      products
        .flatMap((product) => product.categories || [])
        .map((c) => [c.id_category, c]), // key: id_category, value: object category
    ).values(),
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {message && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">{message}</div>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Product Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>Add a new product to your inventory</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="categories">Categories</Label>
                <MultiSelectCategories
                  value={newProduct.categories}
                  onChange={(categories) => setNewProduct({ ...newProduct, categories })}
                  placeholder="Select categories..."
                />
              </div>
              <div>
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input
                  id="stock"
                  type="number"
                  value={newProduct.stock_quantity}
                  onChange={(e) => setNewProduct({ ...newProduct, stock_quantity: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="image">Product Image</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
                {newProduct.imagePreviewUrl && (
                  <div className="mt-2">
                    <Image
                      src={newProduct.imagePreviewUrl || "/placeholder.svg?height=100&width=100&query=product"}
                      alt="Image Preview"
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
              </div>
              <Button onClick={handleAddProduct} className="w-full">
                Add Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {allCategories.map((category) => (
              <SelectItem key={category.id_category} value={category.id_category}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Categories</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id_product}>
                <TableCell>
                  <Image
                    src={product.image_url || "/placeholder.svg?height=50&width=50&query=product"}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {(product.categories || []).map((category) => (
                      <Badge key={category.id_category} variant="outline" className="text-xs">
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.stock_quantity}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      product.is_visible === 1 ? "default" : product.is_visible === 0 ? "destructive" : "secondary"
                    }
                  >
                    {product.is_visible === 1 ? "Active" : "Disable"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setEditingProduct({
                              ...product,
                              price: product.price.toString(),
                              stock_quantity: product.stock_quantity.toString(),
                              categories: product.categories || [],
                              imageFile: null, // No file selected initially for edit
                              imagePreviewUrl: product.image_url || null, // Set current image for preview
                            })
                          }
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Edit Product</DialogTitle>
                          <DialogDescription>Update product information</DialogDescription>
                        </DialogHeader>
                        {editingProduct && (
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="edit-name">Product Name</Label>
                              <Input
                                id="edit-name"
                                value={editingProduct.name}
                                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor="edit-description">Description</Label>
                              <Textarea
                                id="edit-description"
                                value={editingProduct.description}
                                onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor="edit-price">Price</Label>
                              <Input
                                id="edit-price"
                                type="number"
                                step="0.01"
                                value={editingProduct.price}
                                onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor="edit-categories">Categories</Label>
                              <MultiSelectCategories
                                value={editingProduct.categories || []}
                                onChange={(categories) => setEditingProduct({ ...editingProduct, categories })}
                                placeholder="Select categories..."
                              />
                            </div>
                            <div>
                              <Label htmlFor="edit-stock">Stock Quantity</Label>
                              <Input
                                id="edit-stock"
                                type="number"
                                value={editingProduct.stock_quantity}
                                onChange={(e) =>
                                  setEditingProduct({ ...editingProduct, stock_quantity: e.target.value })
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="edit-image">Product Image</Label>
                              <Input
                                id="edit-image"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, true)}
                              />
                              {(editingProduct.imagePreviewUrl || editingProduct.image_url) && (
                                <div className="mt-2">
                                  <Image
                                    src={
                                      editingProduct.imagePreviewUrl ||
                                      editingProduct.image_url ||
                                      "/placeholder.svg?height=100&width=100&query=product"
                                    }
                                    alt="Image Preview"
                                    width={100}
                                    height={100}
                                    className="rounded-md object-cover"
                                  />
                                </div>
                              )}
                            </div>
                            <Button onClick={handleEditProduct} className="w-full">
                              Update Product
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant={product.is_visible === 1 ? "default" : "destructive"}
                      size="sm"
                      onClick={() => handleToggleVisibility(product.id_product, product.is_visible)}
                    >
                      {product.is_visible === 1 ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
