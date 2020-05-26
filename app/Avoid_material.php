<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avoid_material extends Model
{
    protected $fillable = [
        'user_id',
        'material_id'
    ];
}
