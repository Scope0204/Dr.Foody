<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company_code extends Model
{
    protected $fillable = [
        'company_id',
        'company_name'
    ];
}
