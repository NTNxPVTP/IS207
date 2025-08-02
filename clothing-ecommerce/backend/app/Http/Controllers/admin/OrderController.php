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
        $orders = Order::all();

        foreach ($orders as $order) {
            $items = OrderItem::where('id_order', $order->id_order)->get();

            // Gọi luôn quan hệ product
            foreach ($items as $item) {
                $item->product = $item->product; // Trả về thông tin product
            }

            $order->items = $items;
        }

        return response()->json($orders);
    }
}
