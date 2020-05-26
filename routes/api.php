<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 회원가입
Route::get('regist', 'RegistController@index');
Route::post('regist', 'RegistController@store');

Route::post('/app/login', 'AppController@login');
Route::get('/app/userList', 'AppController@userList');
Route::get('/app/searchFood', 'AppController@searchFood');


// 로그인
Route::get('login', 'LoginController@index');
Route::post('login', 'LoginController@login')->name('api.jwt.login');
// 로그인 사용자 정보 가져오기
Route::get('unauthorized', function() {
    return response()->json([
        'status' => 'error',
        'message' => 'Unauthorized'
    ], 401);
})->name('api.jwt.unauthorized');

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('user', 'LoginController@user')->name('api.jwt.user');
    Route::get('refresh', 'LoginController@refresh')->name('api.jwt.refresh');
    Route::get('logout', 'LoginController@logout')->name('api.jwt.logout');
});

// 제품 검색
Route::get('searchList/{search_id?}', 'SearchController@search');

// 제품 상세 보기
Route::get('searchProduct/{id?}', 'SearchController@product');