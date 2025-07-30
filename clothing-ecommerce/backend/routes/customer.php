<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\customer\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/product', [ProductController::class, 'index']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/register',[RegisterController::class,'register']);