<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('user')->get(); // Nếu có quan hệ user
        return response()->json($orders);
        // return response()->json(Order::all(), 200);

    }
}
