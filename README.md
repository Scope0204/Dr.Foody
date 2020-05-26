product
    불닭볶음면, 신라면, 마켓오-브라우니, 홍초, 효성 도시락 김

밴치마킹
    소머즈 https://somers.taglive.net/


Task
    Home
        search bar [ing]
        btn search [x]
        product ranking [x]
    Search result
        product card[x]
        btn buy [x]
    Product information
        data graph [x]


check 
    react url 주소 확인


Ref
    api 호출 테스트:     https://jsonplaceholder.typicode.com/
    jwt설정: https://dev-yakuza.github.io/ko/laravel/jwt/


error 해결
    json 통신이 되지 않는 문제:
        1. request url에서 /api 제거 후 경로 설정
        or
        2. 이전의 controller 경로 /Controllers/Auth/... 를 지정하면 route:list시 에러가 뜸
           /Auth 안의 파일들을 /Controllers로 빼내 오고 
           api.php 에서 경로 재설정 하면
           1. 의 경우인 /api를 제거하지 않고도 정상 작동 and route:list 정상 작동

    url창 새로 고침시 404 not found error문제:
        /path/path 식이었던 경로를 /path로 간단하게 하나로 통일
    