<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function login()
    {
        // Getting the received JSON into $json variable.
        $json = file_get_contents("php://input"); //문자열을 읽어들이는 함수 


        //  json_encode : 전달받은 값을 json문자열로 바꿈
        //  json_decode : json문자열을 php변수로 바꿈
        $obj = json_decode($json,true);
        
        //  var_dump($obj);
        
        // Populate User id from JSON $obj array and store into $id.
        $id = $obj["id"];
        
        
        // Populate Password from JSON $obj array and store into $password.
        $password = $obj['password'];
        
        $check = \App\User::where(["user_mail","=",$id],["password","=",$password])->first();

        if(isset($check)){
        $SuccessLoginMsg = 'Data Matched';
        echo $SuccessLoginMsg ;
        }
        else{
        $InvalidMSG = 'Invalid Username or Password Please Try Again' ;
        echo $InvalidMSG ;
        }

    }
    public function userList(){
        $json = file_get_contents("php://input");
        $obj = json_decode($json,true);
        $id = $obj["id"];
        
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        } 
        
        $user = \App\User::where("user_mail","=",$id)->first();
        
        if ($user) {
            echo $user;
        } else {
            echo "No Results Found.";
        }
    }
    public function searchFood(){
        $json = file_get_contents("php://input");

        $obj = json_decode($json,true);

        $searchText = $obj["searchText"];
        
        $food = \App\Food::where("food_name","like","%".$searchText."%")->get();
        
        if ($food) {
            echo $food;
        } else {
            echo "No Results Found.";
        }
    }
    public function join(){

    }

    public function foodList(){

    }
    public function detailFood(){

    }
    public function heartList(){
        
    }

}