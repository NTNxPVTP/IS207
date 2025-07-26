<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'user'; // hoặc 'users' tùy tên bảng
    protected $primaryKey = 'id_user';
    public $incrementing = false; // nếu là UUID (char)
    protected $keyType = 'string'; // nếu UUID, còn nếu int thì để 'int'
    protected $fillable = [
        'id_user',
        'name',
        'email',
        'role',
        'is_active',
        // thêm các cột khác nếu cần
    ];
}
