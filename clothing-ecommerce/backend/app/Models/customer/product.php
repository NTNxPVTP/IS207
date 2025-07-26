<?php

namespace App\Models\customer;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product'; // hoặc 'products' tùy tên bảng trong DB

    protected $fillable = [
        'name',
        'price',
        'stock_quantity',
        
        
    ];
}
