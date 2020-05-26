import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";


const Container = styled.div `
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    margin-left: 50px;
    z-index: 1;
`;

const Image = styled.div`
    width:100%;
    height: 100%;
    margin-bottom: 5px;
    &: hover {
        ${Image} {
            opacity: 0.4;
        }
    }
    background-image: url(${ props => props.bgUrl });
    border-radius: 4px;
    background-size: cover;
    background-position: center center;
    transition: opacity 0.2s linear;

`; 
// position: relative;
const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    margin-bottom: 5px;
    &: hover {
        ${Image} {
            opacity: 0.4;
        }
    }
`;

const InformationContainer = styled.div`
width: 70%;
margin-left: 50px;
`;
const Title = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 3px;
`;
const Rating = styled.div`
    bottom: 5px;
    right: 5px;
    text-shadow: -1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
    transition: opacity 0.2s linear;
`;

const Inform = styled.div`
    font-size: 10px;
    
`;

const Button = styled.button`
`;

// key={index}
//                                         food_id ={c.food_id} review_count ={c.review_count}
//                                         food_name={c.food_name} food_photo={c.food_photo} 
//                                         rating={c.point}
//                                         search_count ={c.search_count} country ={c.country}
//                                         sex ={c.sex}
// food_id로 고치기
const DataProduct = ({food_id, food_name, food_photo, rating, review_count, search_count, country, sex}) => (
    <Link to={`/data/${food_id}`}>
        <Container>
            <Image bgUrl={
                food_photo
                    ? food_photo  
                    : require("./no_image.png") }
            />
            <InformationContainer>
                <Title>{`제품명: ${food_name}`}</Title>
                <Inform>{`총 리뷰 수: ${review_count}`}</Inform>
                <Inform>{`총 조회 수: ${search_count}`}</Inform>
                <Inform>{`선호국가 : ${country}`}</Inform>
                <Inform>{`선호성별: ${sex}`}</Inform>
            </InformationContainer>
        </Container>
        <Button>구매</Button>
        <Button>찜</Button>
    </Link>
);

DataProduct.prototype = {
    // id: PropTypes.number.isRequired,
    food_id: PropTypes.number,
    food_photo: PropTypes.string,
    food_name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    review_count: PropTypes.number,
    search_count: PropTypes.number,
    country: PropTypes.string,
    sex: PropTypes.string,
};

export default DataProduct;
