<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json('success');
    }

    public function store(Request $request)
    {
        $validateData = Validator::make($request->all(), [
        // $validateData = $request->validate([
            'id'=> 'required|string|max:255', 
            'email'=> 'required|email|max:255', 
            'password'=> 'required|string|max:255|confirmed', 
            'password_confirmation'=> 'required|string|max:255', 
            'user_mail'=> 'required|email|max:255', 
            'nickname'=> 'required|max:255',
            'country_code'=> 'required|integer', 
            'gender'=> 'required|boolean', 
            'birth'=> 'required|date',
            'material'=> 'required|string', 
            'sweet'=> 'required|integer', 
            'bitter'=> 'required|integer', 
            'hot'=> 'required|integer', 
            'sour'=> 'required|integer', 
            'salty'=> 'required|integer'
        ]);
        if($validateData->fails()){
            return response()->json([
                'status'=> 'error',
                'message'=>$validateData->messages()
            ], 200);
        }
        // $table->bigIncrements('language_code');
        //     $table->string('language');
        //     $table->string('keyword');
        $photo = null;
        // 기본 한국어로 지정
        $language_code = 1;
        // language_code
        //      1 한국어 kr
        //      2 영어 en
        //      3 일본어 jp
        //      4 중국어 cn
            
        // country_code 
        //      410 대한민국
        //      392 일본
        //      156 중화인민공화국
        //      840 미국
        switch($request->country_code){
            case 156: $language_code = 4; break;
            case 392: $language_code = 3; break;
            case 840: $language_code = 2; break;
            default: $language_code = 1;
        }
        // 회원 정보 저장
        $user = User::create([
            'user_id' => $request->id, 
            'user_mail' => $request->email, 
            'password' => bcrypt($request->password), 
            'user_nickname' => $request->nickname, 
            'photo' => $photo, 
            'country_code' => $request->country_code, 
            'language_code' => $language_code, 
            'user_gender' => $request->gender, 
            'user_birth' => $request->birth,
            'user_sweet' => $request->sweet, 
            'user_bitter' => $request->bitter, 
            'user_hot' => $request->hot, 
            'user_sour' => $request->sour, 
            'user_salty' => $request->salty
        ]);
        // 회원 기피 재료 저장

        // 'material' => $validateData['material'], 
        // return redirect('/login');
        return response()->json([
            'status'=>'success',
            'data' => $user
        ], '200');
    }

}
