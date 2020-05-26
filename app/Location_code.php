<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location_code extends Model
{
    protected $fillable = [
        'category_id',
        'category_name'
    ];
}
