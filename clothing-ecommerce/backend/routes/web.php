<?php

use Illuminate\Support\Facades\Route;
use App\Models\Customer;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/khachhang', function () {
    $customers = DB::table('orders')->get(); // dùng Query Builder
    // hoặc: $customers = Customer::all();      // dùng Eloquent
    return response()->json($customers);
});