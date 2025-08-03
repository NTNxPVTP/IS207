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
        $orders = Order::with('user')->get();
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
    
    public function updateStatus(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->status = $request->input('status');
        $order->save();

        return response()->json(['message' => 'Status updated successfully']);
    }
}
