<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Food_material extends Model
{
    protected $fillable = [
        'food_id',
        'material_id'
    ];
}
