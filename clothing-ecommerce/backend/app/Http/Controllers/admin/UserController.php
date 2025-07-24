<?php

namespace App\Http\Controllers\admin;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\admin\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    // public function index()
    // {
    //     return response()->json(User::all(), 200);
    // }

    // public function index()
    // {
    //     return response()->json(User::where('is_active', 1)->where('role', 'customer')->get());

    // }
    public function index()
    {
        $users = User::all()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name, // hoặc $user->full_name nếu tên cột là vậy
                'email' => $user->email,
                'registrationDate' => optional($user->created_at)->toDateString(),
                'status' => $user->is_active ? 'active' : 'disabled',
                'totalOrders' => $user->total_order ?? 0,
                'totalSpent' =>$user->total_spent ?? 0.00,
            ];
        });

        return response()->json($users, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|unique:customers,email',
        ]);

        $user = User::create($validated);

        return response()->json($user, 201);
    }
}
