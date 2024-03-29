<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 73; $i <= 100; $i++){
            $start_date = '1950-01-01';

            $end_date = '2009-12-31';
        
            $min = strtotime($start_date);
        
            $max = strtotime($end_date);
        
        
            $inArray = array("김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안", "송", "류", "전", "홍", "고", "문", "양", "손", "배", "조", "백", "허", "유", "남", "심", "노", "정", "하", "곽", "성", "차", "주","우", "구", "신", "임", "나", "전", "민", "유", "진", "지", "엄", "채", "원", "천", "방", "공", "강", "현", "함", "변", "염", "양","변", "여", "추", "노", "도", "소", "신", "석", "선", "설", "마", "길", "주", "연", "방", "위", "표", "명", "기", "반", "왕", "금","옥", "육", "인", "맹", "제", "모", "장", "남", "탁", "국", "여", "진", "어", "은", "편", "구", "용");
            $inArray2 = array("가", "강", "건", "경", "고", "관", "광", "구", "규", "근", "기", "길", "나", "남", "노", "누", "다","단", "달", "담", "대", "덕", "도", "동", "두", "라", "래", "로", "루", "리", "마", "만", "명", "무", "문", "미", "민", "바", "박", "백", "범", "별", "병", "보", "빛", "사", "산", "상", "새", "서", "석", "선", "설", "섭", "성", "세", "소", "솔", "수", "숙", "순", "숭", "슬", "승", "시", "신", "아", "안", "애", "엄", "여", "연", "영", "예", "오", "옥", "완", "요", "용", "우", "원", "월", "위","유", "윤", "율", "으", "은", "의", "이", "익", "인", "일", "잎", "자", "잔", "장", "재", "전", "정", "제", "조", "종", "주", "준", "중", "지", "진", "찬", "창", "채", "천", "철", "초", "춘", "충", "치", "탐", "태", "택", "판", "하", "한", "해", "혁", "현", "형","혜", "호", "홍", "화", "환", "회", "효", "훈", "휘", "희", "운", "모", "배", "부", "림", "봉", "혼", "황", "량", "린", "을", "비","솜", "공", "면", "탁", "온", "디", "항", "후", "려", "균", "묵", "송", "욱", "휴", "언", "령", "섬", "들", "견", "추", "걸", "삼","열", "웅", "분", "변", "양", "출", "타", "흥", "겸", "곤", "번", "식", "란", "더", "손", "술", "훔", "반", "빈", "실", "직", "흠","흔", "악", "람", "뜸", "권", "복", "심", "헌", "엽", "학", "개", "롱", "평", "늘", "늬", "랑", "얀", "향", "울", "련");
            $outArray = array_rand($inArray, 2);
            $outArray2 = array_rand($inArray2, 2);
            $outArray3 = array_rand($inArray, 2);
            $outArray4 = array_rand($inArray2, 2);

            $nickname = $inArray2[$outArray2[0]].$inArray2[$outArray2[1]].$inArray2[$outArray3[0]].$inArray2[$outArray4[1]];;
           

            echo $inArray2[$outArray2[0]];
            echo $inArray2[$outArray2[1]];
            // 위에서 얻은 타임 스탬프 값을 사용하여 난수 생성
            $country = \App\CountryCode::select('country_code')
            ->skip(rand(0,244))
            ->first()
            ->country_code;
            $val = rand($min, $max);
            $date = date('Y-m-d', $val);
            \App\User::insert([
                'id' => 'user'.$i,
                'password' => bcrypt('foody'),
                'user_nickname' => $nickname,
                'user_birth' => $date,
                'user_sex' => rand(0,1),
                'user_sweet' => rand(1,5),
                'user_salty' => rand(1,5),
                'user_hot' => rand(1,5),
                'user_sour' => rand(1,5),
                'user_bitter' => rand(1,5),
                'language_code' => 1,
                'country_code' => 410
            ]);
        }
    }
}
