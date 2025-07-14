import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const recentOrders = [
  {
    customer: "John Doe",
    email: "john@example.com",
    amount: "+$1,999.00",
  },
  {
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "+$39.00",
  },
  {
    customer: "Mike Johnson",
    email: "mike@example.com",
    amount: "+$299.00",
  },
  {
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    amount: "+$99.00",
  },
  {
    customer: "Tom Brown",
    email: "tom@example.com",
    amount: "+$39.00",
  },
]

export function RecentOrders() {
  return (
    <div className="space-y-8">
      {recentOrders.map((order, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {order.customer
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{order.customer}</p>
            <p className="text-sm text-muted-foreground">{order.email}</p>
          </div>
          <div className="ml-auto font-medium">{order.amount}</div>
        </div>
      ))}
    </div>
  )
}
