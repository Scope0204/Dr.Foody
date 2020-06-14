import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import WordCloud from './WordCloud';
import Store from "../Store/store";

import ReviewList from './ReviewList';
import Reviews from './Reviews';

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
    width: 20%;
    height: 40%;
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
const Div = styled.div`
    color: red;
`;

// food_id: 1,
  // company_name: "(주)농심",
  // food_name: "신라면",
  // food_photo: "http://image.nongshim.com/non/pro/03_product.jpg",
  // point: 4,
  // review_count: 2,
  // search_count: 7,
  // company: null,
  // country: "대한민국",
  // sex: "여자"
const ProductPresenter = ({ 
    result, 
    review_result, 
    review_count,

    loading, error}) => 
    (
        <>
            <Container>
                {result && (
                        <Content>
                            <Cover 
                                bgImage = {
                                    result.food_photo 
                                    ?  result.food_photo
                                    : 
                                    require("./no_image.png")
                                }
                            />
                            <Data>
                                <Title>{result.food_name}</Title>
                                <InformationContainer>
                                    <Information>{result.food_name}</Information>
                                    <Divider>•</Divider>
                                    <Information>{result.point}</Information>
                                    <Divider>•</Divider>
                                    <Information>
                                        {result.company_name}
                                        {result.country}
                                    </Information>
                                </InformationContainer>
                                <Overview>
                                    {result.material}
                                    <Div>{result.avoid}</Div>
                                    <WordCloud food_code={result.food_id} />
                                </Overview>
                            </Data>
                        </Content>
                )}
                {review_result && review_result.length > 0 && (
                    <ReviewList review_count={review_count} >
                        {review_result.map( (r, index) => (
                            <Reviews 
                            // review_date, review_content, review_point, user_nickname, review_country
                                key = {index}
                                review_date={r.review_date}
                                review_content={r.review_content}
                                review_point={r.review_point}
                                user_nickname={r.user_nickname}
                                country_code={r.country_code}
                            />
                        ))}
                    </ReviewList>
                )}
            </Container>
    </>
    );


// ProductPresenter.propTypes = {
//     result: PropTypes.object,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.string
// };

export default ProductPresenter;