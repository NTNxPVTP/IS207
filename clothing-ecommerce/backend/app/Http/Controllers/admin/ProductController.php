<?php

namespace App\Http\Controllers\admin;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\admin\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function index()
    {

        return response()->json(Product::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'category' => 'nullable|string',
            'stock_quantity' => 'nullable|integer',
        ]);

        $product = Product::create($validated);

        return response()->json($product);
    }

    public function update(Request $request, $id_product)
    {
        $product = Product::where('id_product', $id_product)->firstOrFail();

        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        // $product->category = $request->category;
        $product->stock_quantity = $request->stock_quantity;
        // Thêm các trường khác nếu có

        $product->save();

        return response()->json($product);
    }

    public function toggleVisibility($id, Request $request)
    {
        $product = Product::findOrFail($id);
        $product->is_visible = $request->input('is_visible');
        $product->save();

        return response()->json($product);
    }
}
