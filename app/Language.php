<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language_code extends Model
{
    public function user(){
        return $this->hasMany(User::class);
    }
}
