<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'review_id',
        'user_id',
        'food_id',
        'language_code',
        'review_content',
        'review_sweet',
        'review_salty',
        'review_hot',
        'review_bitter',
        'review_point',
        'review_date',
    ];
}
