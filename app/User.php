<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                'user_id',
                'country_code',
                'language_code', 
                'user_mail',
                'password',
                'user_nickname',
                'user_birth',
                'user_gender', 
                'user_sex',
                'user_sweet', 
                'user_bitter', 
                'user_hot', 
                'user_sour', 
                'user_salty'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remeber_token','password'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */

    // JWT 인증
    public function getJWTIdentifier() {
        // 토큰 습득
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        // 수정하여 jwt토큰에 정보 추가 가능
        return [
            'user_id'=>$this->user_id,
            'user_nickname'=>$this->user_nickname,
            'user_mail'=>$this->user_mail,
            'user_birth'=>$this->user_birth,
            'user_sex'=>$this->user_sex,
            'user_sweet'=>$this->user_sweet,
            'user_bitter'=>$this->user_bitter,
            'user_hot'=>$this->user_hot,
            'user_sour'=>$this->user_sour,
            'user_salty'=>$this->user_salty,
        ];
    }

    //  나중에 해제하기

    public function Language_code(){
        return $this->belongsTo(Language::class);
    }
    public function Country(){
        return $this->belongsTo(Country::class);
    }
}
