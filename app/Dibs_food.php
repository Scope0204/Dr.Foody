<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dibs_food extends Model
{
    protected $fillable = [
        'user_id',
        'food_id'
    ];
}
