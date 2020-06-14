import React from 'react';
import styled from 'styled-components';
import Message from '../Message';
import ProductList from './ProductList';
import Product from './Product';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    
    transform: translate(20%);
    `;
    // padding-left: 100px;
const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const CartImage = styled.div`
position:absolute;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-image: url(${ props => props.bgUrl });
    background-position: center center;
`;
const Text = styled.span`
    position:absolute;
    font-size: 45px;
    margin-left: 50px;
`;
const Border = styled.div`
width: 60%;
height: 100%;
border-bottom: 5px solid;
padding-top: 4%;
`;
const Button = styled.button``;
const ResultContainer = styled.div`
    padding-top: 10px;    
    
`;
const Div = styled.div`
padding-bottom: 10px;
`;
// "food_id": 1,
//         "company_name": "(주)농심",
//         "food_name": "신라면",
//         "food_photo": "http://image.nongshim.com/non/pro/03_product.jpg",
//         "point": 5,
//         "review_count": 2,
//         "search_count": 661,
//         "company": null,
//         "country": "대한민국",
//         "sex": "남자"
 
const WishlistPresenter = ({wishList , handleCancel, handlePayment, handleDelete, total_price, user_id, type,  error}) =>(
    <Container>
        <ImageContainer>
            <CartImage bgUrl = {require('../../assets/cart.png')} />
            <Text>장바구니</Text>
        </ImageContainer>
        <Border />
        {wishList && wishList.length > 0? 
            (
                <ProductList>
                    {wishList.map( (w, index)=> (
                        <Product 
                            key= {index}
                            handleDelete = {handleDelete}
                            food_id = {w.food_id}
                            company_name = {w.company_name}
                            food_name = {w.food_name}
                            food_photo = {w.food_photo}
                            point = {w.point}
                            review_count = {w.review_count}
                            search_count = {w.search_count}
                            country = {w.country}
                            sex = {w.sex}
                        />
                    ))}
                </ProductList>
            )
        : (
            <Message color="#e74c3c" text="결과를 찾을 수 없습니다." />
        )
    }
    {/* 결제 화면 */}
    <Border />
    <ResultContainer>
            <Div>주문자: {user_id}</Div>
            <Div>결제 방식: {type}</Div>
            <Div>총 결제 금액: {total_price}</Div>
    </ResultContainer>
    <Button onClick={handlePayment}>결제하기</Button>
    <Button onClick={handleCancel}>취소하기</Button>
        {/* <ProductList>
            wishList.map(product)
        </ProductList> */}
        {/* check로 만들어야함 
            value or name 받아서 axios로 제거도 가능하게
        */}
    </Container>
);

export default WishlistPresenter;