import React, * as react from "react";
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



// background-image: url(${ props => props.bgUrl });
// height: 180px;
// background-size: cover;
// border-radius: 4px;
// background-position: center center;
// transition: opacity 0.2s linear;


// height: 100%;
// background-image: url(${props => props.bgUrl});
// background-position: center center;
// background-size: cover;
// background-repeat: no-repeat;
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
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.2s linear;

`; 
// position: relative;
const ImageContainer = styled.div`
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

const Year = styled.span`
    font-size: 10px;
    
`;


// food_id로 고치기
const Product = ({ food_name, food_photo, rating, material}) => (
    <Link to={`/searchProduct/?id=${food_name}`}>
        <Container>
            <Image bgUrl={
                food_photo
                    ? `food_photo path`  
                    : require("./no_image.png") }
            />
            <InformationContainer>
                <Title>{`제품명: ${food_name}`}</Title>
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐
                    </span>{" "}
                    {rating}/10
                </Rating>
                <Year>{material}</Year>
            </InformationContainer>
        </Container>
    </Link>
);

Product.prototype = {
    // id: PropTypes.number.isRequired,
    food_photo: PropTypes.string,
    food_name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    material: PropTypes.string,
};

export default Product;
