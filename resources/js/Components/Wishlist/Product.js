import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";


const ContainerButton = styled.div`
    position: relative;
    border: 0;
    outline: 0;
    background-color: white;
`;
const Container = styled.div `
display: flex;
width: 100%;
height: 100%;
position: relative;
z-index: 1;

`;

const Image = styled.div`
top:0;
left:0;
    width:30%;
    height: 100%;
    min-width: 90px;
    min-height: 180px;
    margin-bottom: 5px;
    &: hover {
        ${Image} {
            opacity: 0.4;
        }
    }
    background-image: url(${ props => props.bgUrl });
    border-radius: 4px;
    transition: opacity 0.2s linear;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    `; 
    // background-position: center center;zx
// position: relative;
const ImageContainer = styled.div`
    width: 50%;
    height: 50%;
    margin-bottom: 5px;
    &: hover {
        ${Image} {
            opacity: 0.4;
        }
    }
`;

const InformationContainer = styled.div`
    width: 50%;
    margin-left: 50px;
`;
const Title = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 3px;
    display: block;
`;
const Rating = styled.div`
    bottom: 5px;
    right: 5px;
    text-shadow: -1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
    transition: opacity 0.2s linear;
`;

const Inform = styled.span`
    font-size: 10px;
    margin:5px;
    
`;

const Button = styled.button`
height: 20%;
`;
const ButtonContainer = styled.div`
    display: flex;
    background-color: pink;
    width: 20%;
`;
const TextDiv = styled.div`

`;
const Divider = styled.span`
    margin: 0 7px;
`;



// key={index}
// food_id ={c.food_id} review_count ={c.review_count}
// food_name={c.food_name} food_photo={c.food_photo} 
// rating={c.point}
// search_count ={c.search_count} country ={c.country}
// sex ={c.sex}
// food_id로 고치기
const Product = ({food_id,company_name, food_name, food_photo, point, review_count, search_count,country, sex, handleDelete, foodJp}) => (
        <ContainerButton>
            <Container>
                <Image bgUrl={
                    food_photo
                        ? food_photo  
                        : require("../../assets/no_image.png") }
                />
                <InformationContainer>
                    <Title>{`食品名: ${foodJp}`}</Title>
                    <Inform>{`製造会社: ${company_name}`}</Inform>
                    <Divider>/</Divider>
                    <Inform>{`全体レビューの数: ${review_count}`}</Inform>
                    <Divider>/</Divider>
                    <Inform>{`全体検索の数: ${search_count}`}</Inform>
                    <Divider>/</Divider>
                    {/* <Inform>{`人気国家: ${country}`}</Inform> */}
                    <Inform>{`人気国家: 日本`}</Inform>
                    <Divider>/</Divider>
                    {/* <Inform>{`人気性別: ${sex}`}</Inform> */}
                    <Inform>{`人気性別: 男性`}</Inform>
                </InformationContainer>
                <ButtonContainer>
                    <Button onClick={handleDelete} value={food_id}>削除する</Button>
                </ButtonContainer>
            </Container>
        </ContainerButton>
);

Product.prototype = {
    food_id: PropTypes.number,
    food_photo: PropTypes.string,
    food_name: PropTypes.string.isRequired,
    point: PropTypes.number,
    review_count: PropTypes.number,
    search_count: PropTypes.number,
    country: PropTypes.string,
    sex: PropTypes.string,
    handleDelete: PropTypes.func,
};

export default Product;
