<?php

namespace App\Models\admin;
use Illuminate\Support\Str; 
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $timestamps = false;
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
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id_product)) {
                $model->id_product = (string) Str::ulid();
            }
        });
    }
}
