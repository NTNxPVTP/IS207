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
        $products = Product::all()->map(function ($product) {
            return [
                'id' => $product->id_product,
                'name' => $product->name, // hoặc $user->full_name nếu tên cột là vậy
                'description' => $product->description,
                'price' => $product->price,
                'status' => $product->is_visible ? 'active' : 'disabled',
                'price' => $product->price ?? 0.00,
                'image' => $product->image_url
            ];
        });

        return response()->json($products, 200);
    }

    

    
}
