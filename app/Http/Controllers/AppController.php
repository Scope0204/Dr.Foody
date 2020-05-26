<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppController extends Controller
{
    public function login(Request $request)
    {        
        //  var_dump($obj);
        
        // Populate User id from JSON $obj array and store into $id.
        $id = $request->id;
        // Populate Password from JSON $obj array and store into $password.
        $password = $request->password;
        
        $check = \App\User::where("id","=",$id)->where("password","=",$password)->first();
        if(isset($check)){
        $SuccessLoginMsg = 'Data Matched';
            return $SuccessLoginMsg ;
        }else{
        $InvalidMSG = 'Invalid Username or Password Please Try Again' ;
            return $InvalidMSG ;
        }
        return 0;

    }
    public function userList(Request $request){
        $id = $request->id;
        
        $user = \App\User::where("id","=",$id)->first();
        
        if ($user) {
            return $user;
        } else {
            return "No Results Found.";
        }
    }
    public function searchFood(Request $request){

        $searchText = $request->searchText;
        $foodList = \App\Food::select(DB::raw('foods.food_id, food_name, food_photo, truncate(avg(review_point),1) as point'))
        ->leftJoin('reviews','reviews.food_id','=','foods.food_id')
        ->where("food_name","like","%".$searchText."%")
        ->groupBy('foods.food_id')
        ->get();
        
        if ($foodList) {
            return $foodList;
        } else {
            return "No Results Found.";
        }
    }
    public function regist(Request $request){
        $user=new User; //User 모델로 객체생성
        $user->fill($regist->all()); // User 모델을 request 객체의 키와 값으로 구성
        $user->save(); // 데이터베이스에 값 생성 
        
        return '가입 완료';
    }

    public function foodList(){
        $foodList = \App\Food::select(DB::raw('foods.food_id, food_name, food_photo, truncate(avg(review_point),1) as point'))
        ->leftJoin('reviews','reviews.food_id','=','foods.food_id')
        ->groupBy('foods.food_id')
        ->get();
        if ($foodList) {        
            return $foodList;
        }else{
            return "No Results Found.";
        }
    }
    public function detailFood(Request $request){

        $food_id = $request->food_id;

        $food = \App\Food::select(DB::raw('foods.food_id, food_name, food_photo, foods.company_id,company_codes.company_name,truncate(avg(review_point),1) as point'))
        ->leftJoin('reviews','reviews.food_id','=','foods.food_id')
        ->leftJoin('company_codes','company_codes.company_id','=','foods.company_id')
        ->groupBy('foods.food_id')
        ->where('foods.food_id',$food_id)
        ->get();
        
        if ($food) {
            return $food;
        } else {
            return "No Results Found.";
        }
    }
    public function dibsFood(Request $request){
        $user_id = $request->user_id;
        $food_id = $request->food_id;
        $heart = $request->heart;
        if($heart){
            DB::table('dibs_foods')->insert(['user_id' => $user_id, 'food_id' => $food_id]); 
            return "heart create";
        }else{
            DB::table('dibs_foods')->where([
                ['user_id', '=', $user_id],
                ['food_id', '=', $food_id]
            ])->delete();
            return "heart destory";
        }
    }
    public function heartList(Request $request){
        $user_id = $request->user_id;
        $food_id = $request->food_id;

        $heartList = \App\DibsFood::where('user_id','=',$user_id)->where('food_id','=',$food_id)->first();
        if ($heartList) {        
            return 'OK';
        }else{
            return 'Try Again';
        }
    }
    
    public function avoidMaterial(Request $request){
        $user_id = $request->user_id;
        $food_id = $request->food_id;
           
        $avoid = DB::table('food_materials')->select(DB::raw('avoid_materials.keyword_id, material_keywords.keyword_name'))
        ->leftJoin('materials','food_materials.material_code','=','materials.material_code')
        ->leftJoin('avoid_materials','materials.keyword_id','=','avoid_materials.keyword_id')
        ->leftJoin('material_keywords','material_keywords.keyword_id','=','avoid_materials.keyword_id')
        ->where("food_id","=",$food_id)
        ->where("avoid_materials.user_id","=",$user_id)
        ->groupBy('avoid_materials.keyword_id')->get();
        return $avoid;
    }

    public function material(Request $request){
        $food_id = $request->food_id;
        $user_id = $request->user_id;
        $date = date("Ymd");
        $user = \App\User::where("user_id","=",$user_id)->first();
        $birth_time = strtotime($user->user_birth);
        $birthday = date('Ymd' , $birth_time);
        $age = floor(($date - $birthday) / 10000);
        DB::table('searches')->insert(
            [
                'food_id'=>$request->food_id,
                'search_date'=>$date,
                'location_code'=>46,
                'search_sex'=>$user->user_sex,
                'search_age'=>$age
            ]
        );
        

        $material = \App\FoodMaterial::select(DB::raw('material_name, if( materials.keyword_id IN (SELECT keyword_id FROM avoid_materials WHERE user_id = '.$user_id.'), 1, 0) as type'))
        ->leftJoin('materials','food_materials.material_code','=','materials.material_code')
        ->where("food_id","=",$food_id)
        ->orderBy('type','desc')
        ->get();
        return $material;
    }

    public function reviewDelete(Request $request){
        $review_id = $request->review_id;

        DB::table('reviews')->where('review_id','=',$review_id)->delete();

    }

    public function reviewUpdate(Request $request){
        $content = $request->content;
        $review_id = $request->review_id;
        $point = $request->point;
        $taste= $request->taste;

        DB::table('reviews')
        ->where('review_id','=',$review_id)->update(
            [
                'review_content'=>$content,
                'review_point'=>$point,
                'review_type'=>$taste
            ]
        );
    }

    public function reviewWrite(Request $request){
        $user_id = $request->user_id;
        $food_id = $request->food_id;
        $language_code = $request->language_code;
        $content = $request->content;
        $taste = $request->taste;
        $point = $request->point;
        $date= date("Y-m-d");

        DB::table('reviews')->insert(
            [
                'user_id' => $user_id, 
                'food_id' => $food_id,
                'language_code' => $language_code, 
                'review_content' => $content,
                'review_date' => $date,
                'review_type' => $taste, 
                'review_point' => $point
            ]
        ); 
    }

    public function reviewList(){
        $review = DB::table('reviews')->leftJoin('users','reviews.user_id','=','users.user_id')->orderByDesc('review_id')->get();
        return $review;
    }

    public function dibsList(Request $request){
        $user_id = $request->user_id;
        $dibslist = \App\DibsFood::where('user_id',$user_id)->get();
        foreach($dibslist as $key => $dibs){
            $dibs->food = $dibslist[$key]->food;
            $dibs->point = DB::table('reviews')->select(DB::raw('truncate(avg(review_point),1) as point, food_id'))
            ->groupBy('food_id')
            ->where('food_id',$dibs->food_id)
            ->value('point');
        }
        return $dibslist;

    }

    public function searchList(Request $request){
        $user_id = $request->user_id;
        $searchList = \App\SearchHistory::where('user_id',$user_id)->get();
        foreach($searchList as $key => $search){
            $search->food = $searchList[$key]->food;
            $search->point = DB::table('reviews')->select(DB::raw('truncate(avg(review_point),1) as point, food_id'))
            ->groupBy('food_id')
            ->where('food_id',$search->food_id)
            ->value('point');
        }
        return $searchList;

    }

    public function searchHistory(Request $request){
        $user_id = $request->user_id;
        $food_id = $request->food_id;
        $date = date("Y-m-d", strtotime("+2 week"));
        $history = \App\SearchHistory::where('user_id',$user_id)->where('food_id',$food_id)->first();
        if(!$history){
            DB::table('search_histories')->insert(['user_id' => $user_id, 'food_id' => $food_id, 'date' => $date]);
            return '완료';
        }else{
            return '이미 존재';
        }
    }
    

    public function dbtest(){
        
        return rand(1, 5);


        /*
        $countryList = \App\CountryCode::select(DB::raw('country_code, country_name_kr'))->get();   

        $languageCode = \App\LanguageCode::select(DB::raw('language_code, language_name'))->get();   
        
        $category = \App\Category::get();   
        return $category;
        
        $keyword = \App\Category::where('category_id',$request->category_id)->first();   
        return $keyword->material_keyword;

        foreach($keyword as $keyword_id){
            DB::table('avoid_material')->insert(['user_id'=>$user_id,'keyword_id'=>$keyword_id]);
        }
        return response()->json(['country'=>$countryList,'language'=>$languageCode]);
      */
    }
}
