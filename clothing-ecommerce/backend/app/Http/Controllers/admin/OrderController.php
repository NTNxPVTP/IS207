<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['user', 'orderItems'])->get(); // Nếu có quan hệ user
        foreach ($orders as $order) {
            $order->items = OrderItem::where('id_order', $order->id_order)->get();
        }
        return response()->json($orders);
    }
}
