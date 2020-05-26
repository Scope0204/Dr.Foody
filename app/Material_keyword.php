<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material_keyword extends Model
{
    protected $fillable = [
        'keyword_id',
        'keyword_name',
        'keyword_code',
        'category_id'
    ];
}
