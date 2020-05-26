<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $fillable = [
        'material_id',
        'material_name',
        'keyword_code',
        'category_id',
        'keyword_id'
    ];
}
