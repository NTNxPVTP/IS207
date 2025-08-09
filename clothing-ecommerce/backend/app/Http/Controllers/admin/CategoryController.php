<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        // Nếu muốn lấy toàn bộ categories
        return response()->json(Category::all(), 200);

    }
}
