<?php

namespace App\Http\Controllers\admin;
use Illuminate\Support\Str;

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

        // return response()->json(Product::all(), 200);
        $products = Product::with('categories')->get();
        return response()->json($products, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock_quantity' => 'required|integer',
            'categories' => 'array', // mảng id_category
            'categories.*' => 'exists:Category,id_category',
        ]);

        // Tạo product
        $product = Product::create([
            'id_product' => (string) Str::uuid(),
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'price' => $validated['price'],
            'stock_quantity' => $validated['stock_quantity'],
        ]);

        // Ghi vào bảng Product_Category
        if (!empty($validated['categories'])) {
            $product->categories()->attach($validated['categories']);
        }

        return response()->json($product->load('categories'));
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
