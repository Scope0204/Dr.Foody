import React from 'react';
import axios from 'axios';
import WishlistPresenter from './WishlistPresenter';
import api, { Api } from '../api';


// 찜(장바구니)에 넣은 목록을 가져와서 확인

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wishList: null,
            user_id : window.sessionStorage.getItem('id'),
            error: "",
            total_price: 0,
            type:"kakaopay",
            food_list: [],
            date: new Date().getTime(),
            order_id:"",
        };
    };

    handlePayment = e => {
        e.preventDefault();
        this.requestPay();
        // 구매가 완료 되었습니다.
        // go 구매목록 보기
        // go 메인화면으로 가기

        this.props.history.push('/payment');
    };
    handleCancel = e => {
        e.preventDefault();
        this.props.history.push('/data');
    };
    handleDelete = e => {
        e.preventDefault();
        const { target: {value}} = e;
        const {user_id} = this.state;
        Api.wishDeleteApi(user_id, value);
        alert('삭제하였습니다.');
        window.location.reload();
    };

    // 주문 번호 생성
    createMerchant_uid = () =>{
        let { date } = this.state;
        const order_id = `DR_${date}`;
        console.log(order_id);
        this.setState({
            order_id,
        });
    }
    // 구매하기 버튼을 눌렀을 때 동작
    requestPay = () => {
        const { user_id, order_id, food_list, total_price, type} = this.state;
        // IMP.request_pay(param, callback) 호출
        //   const { IMP } = window;
        const userCode = 'imp81806721';
        IMP.init(userCode);
        this.createMerchant_uid();
        IMP.request_pay({ // param
            pay_method :'card',
            merchant_uid : order_id,
            // name : `${user_id} 님의 주문`,
            name : `아닌데요 저 세진인데용 ㅇㅁㅇa`,
            // amount : total_price,
            amount : 950706,
            buyer_name : '보이스 피싱입니다 ^^a',
            buyer_tel : '01041974198',
            buyer_email: "rmsidsha@naver.com",
        }, rsp => { // callback
            if (rsp.success) {
            // 결제 성공 시 로직,
            console.log('결제 성공');
            Api.buyDataApi(user_id,
                order_id,
                type,
                food_list);
            this.props.history.push(`/payment/result/${order_id}`);
            } else {
            // 결제 실패 시 로직,
                console.log(rsp);
                this.props.history.push(`/wishlist`);
            }
        });
    }

    async componentDidMount(){
        // 이부분에서 리스트 가져 와야함
        // 리스트 가져오고 취소체크해서 삭제 가능하게
        // 결제 버튼 -> 결제 창
        // 취소 버튼 -> 뒤로 가기
        // http://3.34.97.97/api/pocketList 
        // key = user_id
        const { user_id } = this.state;
        let total_price = 0;
        let food_list = [];
        try{
            const { data: wishList} = await Api.wishListApi(user_id);
            console.log(user_id);
            console.log(wishList);
            // total_price = calTotalPrice(wishList.length);
            total_price = wishList.length * 5000;
            wishList.map( w => {
                food_list.push(w.food_id);
            });
            this.setState({
                wishList,
                total_price,
                food_list,
            });
        }catch {
            this.setState({
                error: '검색 결과가 없습니다.'
            });
        }
    }
    
    render(){
        const { wishList, total_price, error, user_id,type  } = this.state;
        console.log('위시리스트: ', wishList);
        return (
            <WishlistPresenter 
                wishList = {wishList}
                total_price = {total_price}
                user_id = {user_id}
                type = {type}
                handleCancel = {this.handleCancel}
                handlePayment = {this.handlePayment}
                handleDelete = {this.handleDelete}
                error = {error}
            />
        );
    }

}