import React from 'react';
import styled from 'styled-components';
import Message from '../../Message';
import ProductList from './ProductList';
import Product from './Product';
import { Link } from 'react-router-dom';
import MediaCard from './MediaCard';
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
    padding-bottom: 50px;
`;
const CartImage = styled.div`
position:absolute;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-image: url(${ props => props.bgUrl });
    background-position: center center;
`;
const WishImage = styled.div`
position:absolute;
left: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-image: url(${ props => props.bgUrl });
    background-position: center center;
`;
const Text = styled.span`
    position:absolute;
    font-size: 45px;
    `;
    // margin-left: 50px;
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
color: red;
font-size: bold;
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
 
const DataListPresenter = ({bought_list, foodJp}) => (
    <Container>
        <ImageContainer>
            {/* <CartImage bgUrl = {require('../../../assets/logo.jpg')} /> */}
            <Link to='/wishlist'>
                <WishImage bgUrl = {require('../../../assets/cart.png')}/>
            </Link>
            <Text>データリスト</Text>
        </ImageContainer>
        {/* <Border /> */}
        {/* bought_list.length > 0 && */}
        {bought_list && bought_list.length > 0
        ? (
            <ProductList>
                {bought_list.map( (b,index) => (
                    <MediaCard 
                        key= {index}
                        food_id = {b.food_id}
                        company_name = {b.company_name}
                        food_name = {b.food_name}
                        foodJp = {foodJp}
                        food_photo = {b.food_photo}
                        point = {b.point}
                        review_count = {b.review_count}
                        search_count = {b.search_count}
                        country = {b.country}
                        sex = {b.sex}
                    />
                    // <Product 
                    //     key= {index}
                    //     food_id = {b.food_id}
                    //     company_name = {b.company_name}
                    //     food_name = {b.food_name}
                    //     food_photo = {b.food_photo}
                    //     point = {b.point}
                    //     review_count = {b.review_count}
                    //     search_count = {b.search_count}
                    //     country = {b.country}
                    //     sex = {b.sex}
                    // />
                    ))}
            </ProductList>
        )
        : (
            <Div>データがありません。</Div> 
        )            
        }
    </Container>
);

export default DataListPresenter;