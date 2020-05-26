import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 50px;
`;
const Title = styled.h1`
    font-size: 45px;
    margin-bottom: 30px;
`;

const Divider = styled.span`
    margin: 0 7px;
`;

const InformationContainer = styled.div`
`;

const Information = styled.span`
    font-size: 15px;
    margin-bottom: 20px;
`;

const Overview = styled.div`
    margin-top: 20px;
    font-size: 16px;
    world-spacing: 5px;
    letter-spacing: 1px;
    line-height: 1.5;
    width: 80%;
`;

// food_name
// food_raiting
// food_photo
// material
const ProductPresenter = ({ result, loading, error}) => (
        <Container>
            <Content>
                <Cover 
                    bgImage = {
                        result.food_photo 
                        ?  `photo_path`
                        : 
                        require("./no_image.png")
                    }
                />
                <Data>
                {/* food_name = {result.food_name}
                    food_photo ={result.food_photo}  
                    rating= {result.food_rating} 
                    material= {result.material} */}
                    <Title>{result.food_name}</Title>
                    <InformationContainer>
                        <Information>{result.food_name}</Information>
                        <Divider>•</Divider>
                        <Information>{result.food_rating}</Information>
                        <Divider>•</Divider>
                        <Information>
                            {result.material}
                        </Information>
                    </InformationContainer>
                    {/* <Overview>
                        {result.overview}
                    </Overview> */}
                </Data>
            </Content>
        </Container>
    );


// ProductPresenter.propTypes = {
//     result: PropTypes.object,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.string
// };

export default ProductPresenter;