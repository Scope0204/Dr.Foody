<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Search_history extends Model
{
    protected $fillable = [
        'user_id',
        'food_id',
        'serach_date'
    ];
}
