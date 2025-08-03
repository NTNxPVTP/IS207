<?php

namespace App\Models;

use App\Models\Admin\User;
use App\Models\OrderItem;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $primaryKey = 'id_order';
    public $incrementing = false; // vì dùng CHAR(36)

    protected $fillable = [
        'id_order',
        'id_user',
        'order_date',
        'status',
        'total_cost',
        'shipping_address',
        'payment_method',
        'tracking_code',
        'shipping_provider'
    ];

    protected $casts = [
        'order_date' => 'datetime',
        'created_at' => 'datetime',
    ];
    public $timestamps = false; // vì không có created_at, updated_at


    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'id_order', 'id_order');
        return OrderItem::where('id_order', $order->id_order)->get();
        
    }
}
