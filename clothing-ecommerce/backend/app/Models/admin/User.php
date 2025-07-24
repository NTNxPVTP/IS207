<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'user'; // hoặc 'users' tùy tên bảng

    protected $fillable = [
        'name',
        'email',
        'role',
        'is_active',
        // thêm các cột khác nếu cần
    ];
}
