<?php

namespace App\Models;
use App\Models\Admin\Product;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $table = 'order_item'; // đúng tên bảng
    protected $keyType = 'string'; // nếu UUID, còn nếu int thì để 'int'
    
    public $incrementing = false;
    public $timestamps = false; // vì không có created_at, updated_at

    protected $fillable = [
        'id_order', 'id_product', 'quantity', 'price_at_order_time'
    ];

    // public function product()
    // {
    //     return $this->belongsTo(Product::class, 'id_product', 'id_product');
    // }
}
