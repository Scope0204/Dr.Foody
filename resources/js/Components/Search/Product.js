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

const Year = styled.span`
    font-size: 10px;
    
`;


// food_id로 고치기
const Product = ({food_code, food_name, food_photo, point, company_name}) => (
    <Link to={`/searchProduct/${food_code}`}>
        <Container>
            <Image bgUrl={
                food_photo
                    ? food_photo
                    : require("./no_image.png") }
            />
            <InformationContainer>
                <Title>{`제품명: ${food_name}`}</Title>
                <Year>{company_name}</Year>
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐
                    </span>{" "}
                    {point}/10
                </Rating>
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
