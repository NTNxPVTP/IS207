<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrderItem;
use App\Models\Order;
use App\Models\Admin\Product;


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

            'by_category' => OrderItem::join('product', 'order_item.id_product', '=', 'product.id_product')
                ->join('product_category', 'product.id_product', '=', 'product_category.id_product')
                ->join('category', 'product_category.id_category', '=', 'category.id_category')
                ->selectRaw('category.name as label, SUM(order_item.quantity * order_item.price_at_order_time) as total')
                ->groupBy('category.name')
                ->get(),

        ];

        return response()->json($data);
    }

    public function inventory(Request $request)
    {
        $categories = DB::table('category as c')
            ->join('product_category as pc', 'c.id_category', '=', 'pc.id_category')
            ->join('product as p', 'p.id_product', '=', 'pc.id_product')
            ->select(
                'c.name as category',
                'p.name as product',
                'p.stock_quantity as stock'
            )
            ->get()
            ->groupBy('category')
            ->map(function ($items, $categoryName) {
                return [
                    'category' => $categoryName,
                    'products' => $items->map(function ($item) {
                        return [
                            'product' => $item->product,
                            'stock' => $item->stock
                        ];
                    })->values(),
                    'total_quantity' => $items->sum('stock')
                ];
            })
            ->values();

        return response()->json($categories);
    }
}
