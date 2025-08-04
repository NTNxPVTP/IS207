<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrderItem;
use App\Models\Order;


class AnalyticsController extends Controller
{
    public function revenue(Request $request)
    {
        $data = [
            'by_day' => Order::selectRaw('DATE(order_date) as label, SUM(total_cost) as total')
                ->groupByRaw('DATE(order_date)')
                ->orderBy('label')
                ->get(),

            'by_month' => Order::selectRaw('DATE_FORMAT(order_date, "%Y-%m") as label, SUM(total_cost) as total')
                ->groupByRaw('DATE_FORMAT(order_date, "%Y-%m")')
                ->orderBy('label')
                ->get(),

            // 'by_category' => OrderItem::join('products', 'order_item.id_product', '=', 'products.id_product')
            //     ->selectRaw('products.category as label, SUM(order_item.quantity * order_item.price_at_order_time) as total')
            //     ->groupBy('products.category')
            //     ->get(),
        ];

        return response()->json($data);
    }
}
