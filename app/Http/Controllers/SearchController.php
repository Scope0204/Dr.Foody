<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request){
        // $search_id = $request->get('id');
        // $search = DB::table('food')->where('name','like', '%'+$search_id+'%')->get();
        // $users = DB::table('users')->select('name', 'email as user_email')->get();
        

        // food_name = {prod.food_name}
        //                             imageUrl ={prod.food_photo}  
        //                             rating= {prod.food_rating} 
        //                             materiial= {prod.materiial}
        $search = $request->get('search_id');
        $result = ['food_name'=>$search, 'food_photo'=>null, 'food_rating'=>10, 'material'=>'material'];
        return response()->json([
            'status'=>'success',
            'search_data'=>$search,
            'result'=> $result
        ], 200);
    }

    public function product(Request $request){
        $search = $request->get('id');
        $result = ['food_name'=>$search, 'food_photo'=>null, 'food_rating'=>10, 'material'=>'material'];
        return response()->json([
            'status'=>'success',
            'search_data'=>$search,
            'result'=> $result,
            'function'=> 'product',
        ], 200);

       
        // return response()->json($search);
        // return response()->json('드래곤');
    }
}
