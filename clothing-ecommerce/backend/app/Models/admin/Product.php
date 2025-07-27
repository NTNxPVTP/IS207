<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product'; // hoặc 'users' tùy tên bảng
    protected $primaryKey = 'id_product';
    public $incrementing = false; // nếu là UUID (char)
    protected $keyType = 'string'; // nếu UUID, còn nếu int thì để 'int'
    protected $fillable = [
        'id_product',
        'name',
        'description',
        'price',
        'stock_quantity',
        'image_url',
        'is_visible',
        'created_at'
        // thêm các cột khác nếu cần
    ];
}
