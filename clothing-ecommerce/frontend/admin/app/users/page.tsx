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
import { Search, Eye, UserX } from "lucide-react"

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    registrationDate: "2024-01-15",
    status: "active",
    totalOrders: 12,
    totalSpent: 1250.0,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    registrationDate: "2024-02-20",
    status: "active",
    totalOrders: 8,
    totalSpent: 890.5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    registrationDate: "2024-01-10",
    status: "disabled",
    totalOrders: 3,
    totalSpent: 150.0,
  },
]




export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // const toggleUserStatus = (userId) => {
  //   setUsers(
  //     users.map((user) =>
  //       user.id === userId ? { ...user, status: user.status === "active" ? "disabled" : "active" } : user,
  //     ),
  //   )
  // }

  const toggleUserStatus = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/admin/users/${userId}/toggle-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Lỗi cập nhật trạng thái');
      }

      const data = await response.json();

      // Cập nhật lại danh sách users sau khi đổi trạng thái
      // setUsers((prevUsers) =>
      //   prevUsers.map((user) =>
      //     user.id === userId ? { ...user, status: data.user.status } : user
      //   )
      // );
      console.log(data);
      getCustomers();

      setMessage('Cập nhật trạng thái thành công');
    } catch (error) {
      console.error('Lỗi:', error);
      setMessage('Cập nhật trạng thái thất bại');
    }
  };


  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/hello');


      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      console.error('Lỗi gọi API:', error);
      setMessage('Có lỗi xảy ra!');
    }
  };



  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/admin/users');
      const data = await response.json();
      console.log('Dữ liệu từ API:', data);

      setUsers(data);
    } catch (error) {
      console.error('Lỗi gọi API:', error);
      setMessage('Có lỗi xảy ra!');
    }
  }

  useEffect(() => {
    getCustomers();
  }, []);


  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <button onClick={getCustomers}>Click để gọi Laravel API</button>

      {message && (
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message.name}</p>
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
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
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="disabled">Disabled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.registrationDate}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "destructive"}>{user.status}</Badge>
                </TableCell>
                <TableCell>{user.totalOrders}</TableCell>
                {/* <TableCell>${users.totalSpent.toFixed(2)}</TableCell> */}
                <TableCell>${user.totalSpent}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedUser(user)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>User Details</ DialogTitle>
                          <DialogDescription>Detailed information about {user.name}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <strong>Name:</strong> {user.name}
                          </div>
                          <div>
                            <strong>Email:</strong> {user.email}
                          </div>
                          <div>
                            <strong>Registration Date:</strong> {user.registrationDate}
                          </div>
                          <div>
                            <strong>Status:</strong> {user.status}
                          </div>
                          <div>
                            <strong>Total Orders:</strong> {user.totalOrders}
                          </div>
                          <div>
                            {/* <strong>Total Spent:</strong> ${users.totalSpent.toFixed(2)} */}
                            <strong>Total Spent:</strong> ${user.totalSpent}

                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant={user.status === "active" ? "destructive" : "default"}
                      size="sm"
                      onClick={() => toggleUserStatus(user.id)}
                    >
                      <UserX className="h-4 w-4" />
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
