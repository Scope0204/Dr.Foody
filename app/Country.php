<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public function User(){
        return $this->hasMany(User::class);
    }
}
