<?php

namespace App\Http\Controllers\customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\customer\Product;

class ProductController extends Controller
{
    // public function index()
    // {
    //     $products = Product::all()->map(function ($product) {
    //         return [
    //             'id' => $product->id,
    //             'name' => $product->name,
    //             'price' => $product->price,
    //             'category' => $product->category->name ?? null, // nếu có quan hệ category
    //             'quantity' => $product->quantity,
    //             'status' => $product->is_active ? 'active' : 'disabled',
    //             'createdAt' => optional($product->created_at)->toDateString(),
    //         ];
    //     });

    //     return response()->json($products, 200);
    // }
    public function index()
    {
        return response()->json(product::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'category_id' => 'nullable|exists:categories,id', // nếu có
        ]);

        $product = Product::create($validated);

        return response()->json($product, 201);
    }
}
