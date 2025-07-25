<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/users', [UserController::class, 'index']);

Route::put('/users/{id}/toggle-status', [UserController::class, 'toggleStatus']);
Route::get('/users/{id}/toggle-status', [UserController::class, 'toggleStatus']);

