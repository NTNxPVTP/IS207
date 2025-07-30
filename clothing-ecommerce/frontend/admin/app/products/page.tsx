"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

const mockProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 29.99,
    category: "T-Shirts",
    stock: 150,
    status: "active",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    description: "Premium denim jeans",
    price: 79.99,
    category: "Jeans",
    stock: 75,
    status: "active",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Summer Dress",
    description: "Light and airy summer dress",
    price: 59.99,
    category: "Dresses",
    stock: 0,
    status: "out_of_stock",
    image: "/placeholder.svg?height=50&width=50",
  },
]

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
    category: "",
    stock_quantity: "",
  })

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory && product.status !== "deleted"
  })

  const handleAddProduct = async () => {

    try {
      const newProduct = {
        name: "Áo sơ mi",
        description: "Áo sơ mi nam tay dài",
        price: 199000,
        category: "Áo nam",
        stock_quantity: 100,
      }
      const response = await fetch("http://127.0.0.1:8000/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Lỗi khi thêm sản phẩm");
      }

      const savedProduct = await response.json();
      console.log("Đã thêm sản phẩm:", savedProduct);

      // Sau khi thêm thành công, load lại danh sách
      await getProducts();


      setMessage("Thêm sản phẩm thành công!");

    } catch (error) {
      console.error("Lỗi thêm sản phẩm:", error);
      setMessage("Không thể thêm sản phẩm.");
    }
  };



  const handleEditProduct = () => {
    setProducts(
      products.map((p) =>
        p.id_product === editingProduct.id_product
          ? {
            ...editingProduct,
            price: Number.parseFloat(editingProduct.price),
            stock: Number.parseInt(editingProduct.stock_quantity),
          }
          : p,
      ),
    )
    setEditingProduct(null)
  }

  const handleSoftDelete = (productId) => {
    setProducts(products.map((p) => (p.id_product === productId ? { ...p, status: "deleted" } : p)))
  }

  const [message, setMessage] = useState('');

  const getProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/admin/products');
      const data = await response.json();
      console.log('Dữ liệu từ API:', data);

      setProducts(data);
    } catch (error) {
      console.error('Lỗi gọi API:', error);
      setMessage('Có lỗi xảy ra!');
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Product Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
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
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newProduct.category}
                  onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="T-Shirts">T-Shirts</SelectItem>
                    <SelectItem value="Jeans">Jeans</SelectItem>
                    <SelectItem value="Dresses">Dresses</SelectItem>
                    <SelectItem value="Shoes">Shoes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input
                  id="stock"
                  type="number"
                  value={newProduct.stock_quantity}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
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
            <SelectItem value="T-Shirts">T-Shirts</SelectItem>
            <SelectItem value="Jeans">Jeans</SelectItem>
            <SelectItem value="Dresses">Dresses</SelectItem>
            <SelectItem value="Shoes">Shoes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
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
                    src={product.image_url || "/placeholder.svg"}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                {/* <TableCell>${product.price.toFixed(2)}</TableCell> */}
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.stock_quantity}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      product.is_visible === 1
                        ? "default"
                        : product.is_visible === 0
                          ? "destructive"
                          : "secondary"
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
                              stock: product.stock_quantity.toString(),
                            })
                          }
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
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
                              <Label htmlFor="edit-stock">Stock Quantity</Label>
                              <Input
                                id="edit-stock"
                                type="number"
                                value={editingProduct.stock_quantity}
                                onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
                              />
                            </div>
                            <Button onClick={handleEditProduct} className="w-full">
                              Update Product
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button variant="destructive" size="sm" onClick={() => handleSoftDelete(product.id_product)}>
                      <Trash2 className="h-4 w-4" />
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
