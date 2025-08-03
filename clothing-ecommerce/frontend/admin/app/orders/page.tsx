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
import { Search, Eye } from "lucide-react"

const mockOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    date: "2024-01-15",
    status: "pending",
    total: 129.99,
    items: [
      { name: "Classic White T-Shirt", quantity: 2, price: 29.99 },
      { name: "Blue Denim Jeans", quantity: 1, price: 79.99 },
    ],
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2024-01-14",
    status: "processing",
    total: 59.99,
    items: [{ name: "Summer Dress", quantity: 1, price: 59.99 }],
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    date: "2024-01-13",
    status: "shipped",
    total: 89.98,
    items: [{ name: "Classic White T-Shirt", quantity: 3, price: 29.99 }],
  },
  {
    id: "ORD-004",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    date: "2024-01-12",
    status: "delivered",
    total: 199.97,
    items: [
      { name: "Blue Denim Jeans", quantity: 2, price: 79.99 },
      { name: "Classic White T-Shirt", quantity: 1, price: 29.99 },
    ],
  },
]

const statusOptions = [
  { value: "pending", label: "Pending", variant: "secondary" },
  { value: "confirmed", label: "Confirmed", variant: "default" },
  { value: "shipped", label: "Shipped", variant: "outline" },
  { value: "delivered", label: "Delivered", variant: "default" },
  { value: "cancelled", label: "Cancelled", variant: "destructive" },
]

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id_order.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user?.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          // Nếu có cần auth token:
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const updatedOrder = await response.json();

      getOrders();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Cập nhật trạng thái thất bại!');
    }
  };

  const getStatusBadgeVariant = (status) => {
    const statusOption = statusOptions.find((option) => option.value === status)
    return statusOption?.variant || "default"
  }

  const [message, setMessage] = useState('');

  const getOrders = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/admin/orders');
      const data = await response.json();
      console.log('Dữ liệu từ API:', data);
      setOrders(data);
    } catch (error) {
      console.error('Lỗi gọi API:', error);
      setMessage('Có lỗi xảy ra!');
    }
  }

  useEffect(() => {
    getOrders();
  }, []);


  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Order Management</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id_order}>
                <TableCell className="font-medium">{order.id_order}</TableCell>
                <TableCell>{order.user?.name}</TableCell>
                <TableCell>{order.order_date}</TableCell>
                <TableCell>
                  <Select value={order.status} onValueChange={(value) => updateOrderStatus(order.id_order, value)}>
                    <SelectTrigger className="w-[130px]">
                      <Badge variant={getStatusBadgeVariant(order.status)}>
                        {statusOptions.find((opt) => opt.value === order.status)?.label}
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>${order.total_cost}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Order Details - {order.id_order}</DialogTitle>
                        <DialogDescription>Complete order information</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <strong>Customer:</strong> {order.user?.name}
                        </div>
                        <div>
                          <strong>Email:</strong> {order.user?.email}
                        </div>
                        <div>
                          <strong>Date:</strong> {order.order_date}
                        </div>
                        <div>
                          <strong>Status:</strong>
                          <Badge className="ml-2" variant={getStatusBadgeVariant(order.status)}>
                            {statusOptions.find((opt) => opt.value === order.status)?.label}
                          </Badge>
                        </div>
                        <div>
                          <strong>Items:</strong>
                          <div className="mt-2 space-y-2">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between p-2 bg-muted rounded">
                                <span>
                                  {item.product.name} x{item.quantity}
                                </span>
                                <span>${(item.price_at_order_time * item.quantity)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="border-t pt-2">
                          <strong>Total: ${order.total_cost}</strong>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
