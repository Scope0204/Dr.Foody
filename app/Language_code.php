<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language_code extends Model
{
    protected $fillable = [
        'language_code',
        'language_name',
        'language_keyword'
    ];
}
