<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'Category';
    protected $primaryKey = 'id_category';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = ['id_category', 'name', 'parent_id'];

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id_category');
    }
}
