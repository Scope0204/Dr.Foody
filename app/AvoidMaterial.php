<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AvoidMaterial extends Model
{
    protected $fillable = [
        'user_id',
        'material_id'
    ];
}
