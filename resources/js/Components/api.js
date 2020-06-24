import React from "react";
import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:8000/api/'
    baseURL: 'http://3.34.97.97/api/'
});
const clustering_api = axios.create({
    baseURL: 'http://35.230.114.182:5000/',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Accept: "application/json", // 서버가 json 타입으로 변환해서 사용
                  "Content-Type": "application/json",
        },
});
// baseURL: http://3.34.97.97/api/

const loginUrl = 'login';
const registUrl = 'regist';
const searchUrl = 'search';
const searchListUrl = 'searchList';
const searchProductUrl = 'searchProduct';

// laravel
const SERVICE_EX_DATA = 'chartDown';
const ADD_WEISH_LIST = 'pocket';
const WISH_LIST = 'pocketList';
const WISH_DELETE = 'deletePoket';
const BUY_DATA = 'selldata';
const MY_DATA = 'selldataList';
const DETAIL_FOOD2 = 'detailFood2';
const COUNTRY_DATA = 'countryData';
// 플라스크
const CLUSTERUNG = 'foodDict';
const FOOD_KEY_WORD = 'foodKeyWord';

export const Api = {
    addWishListApi: (user_id, food_id) => api.post(ADD_WEISH_LIST, {user_id, food_id}),
    wishListApi: user_id => api.post(WISH_LIST, {user_id}),
    wishDeleteApi: (user_id, food_id) => {
        if(food_id){
            api.post(WISH_DELETE, {user_id, food_id});
        } else if (user_id) {
            api.post(WISH_DELETE, {user_id});
        }
    },
    buyDataApi: ( user_id, order_id, type, food_list) => api.post(BUY_DATA, {user_id,order_id,food_list,type})
        .then(res=> {
            // result = bool
            return res.result;
        }),
    service_exApi: (food_id, source, sdate, edate) => api.get(`${SERVICE_EX_DATA}/${food_id}/${source}/${sdate}/${edate}`),
    myDataApi: user_id => api.get(`${MY_DATA}/${user_id}`),
    detailFood2Api: food_id => api.get(`${DETAIL_FOOD2}/${food_id}`),
    countryDataApi: food_id => api.get(`${COUNTRY_DATA}/${food_id}`),
    clusteringApi: productName => clustering_api.post(CLUSTERUNG, {productName}),
    // productNameKeyWord = 제품명, productNameList = 배열
    foodKeyWordApi: (food_name, productNameList) => clustering_api.post(FOOD_KEY_WORD, {
            productNameKeyWord: food_name, 
            productNameList,
    }),
    
};
