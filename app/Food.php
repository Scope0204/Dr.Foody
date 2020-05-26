<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $fillable = [
        'food_id',
        'company_id',
        'food_name',
        'food_photo',
        'food_word'
    ];
}
