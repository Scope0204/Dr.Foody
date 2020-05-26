<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country_code extends Model
{
    protected $fillable = [
        'country_code',
        'country_name_kr',
        'country_name_en'
    ];
}
