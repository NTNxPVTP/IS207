<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\OrderItemController;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//user
Route::get('/users', [UserController::class, 'index']);
Route::put('/users/{id}/toggle-status', [UserController::class, 'toggleStatus']);
Route::get('/users/{id}/toggle-status', [UserController::class, 'toggleStatus']);

//product
Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::put('/products/{id_product}', [ProductController::class, 'update']);
Route::patch('/products/{id}/toggle-visibility', [ProductController::class, 'toggleVisibility']);

//orders
Route::get('/orders', [OrderController::class, 'index']);
Route::patch('/orders/{id}', [OrderController::class, 'updateStatus']);

//Order_Item
Route::get('/order_item', [OrderItemController::class, 'index']);

