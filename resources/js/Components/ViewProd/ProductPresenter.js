import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import WordCloud from './WordCloud';
import Store from "../Store/store";

import ReviewList from './ReviewList';
import Reviews from './Reviews';
// antd
import { Input, Button } from 'antd';

const { TextArea } = Input

const Container = styled.div`
    height: calc(100vh - 100px);
    width: 80%;
    position: relative;
    left: 50%;
    transform: translate(-50%);
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 280px;
    height: 230px;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;    
    left: 40%;
    transform: translate(35%, 30%);
    top: 10%;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
    left: 50%;
    transform: translate(20%, 50px);
`;
const Title = styled.h1`
    font-size: 45px;
    margin-bottom: 30px;
    font-weight: 600;
`;

const Divider = styled.span`
    margin: 0 7px;
    font-size: 20px;
    color: black;
    font-weight: 500;
`;

const InformationContainer = styled.div`
`;

const Information = styled.span`
    font-size: 20px;
    color: black;
    font-weight: 500;
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
const WarningDiv = styled.div`
    padding-top: 20px;
    color: red;
    font-size: 28px;
    font-weight: 400;
`;
const TextAreaContainer = styled.div`
    width: 50%;
    transform: translate(50%, 20%);
`;

const BorderDiv = styled.div`
width: 80%;
border-top: 1px solid rgb(221, 221, 221) !important;
margin-bottom: 3%;
transform: translate(12%);
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
    user_id, 
    id, 
    review_result, 
    review_count,
    logged,
    // 함수
    getReviewList,
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
                                    <Information>平均点数: {result.point}({review_result? review_result.length+1 : 0}個)</Information>
                                    <Divider> / </Divider>
                                    <Information>
                                        製造会社: {result.company_name}
                                    </Information>
                                </InformationContainer>
                                <Overview>
                                    {result.material}
                                    <WarningDiv>{result.avoid? result.avoid: "注意すべき原材料がありません。"}</WarningDiv>
                                    {/* <WordCloud food_code={result.food_id} /> */}
                                </Overview>
                            </Data>
                        </Content>
                )}
                {/* {logged && (
                        <>
                        <TextAreaContainer>
                            <TextArea
                                // value={value}
                                // onChange={this.onChange}
                                placeholder="리뷰를 작성해 주세요"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                            <Button onClick={handleCreate}>등록</Button>
                        </TextAreaContainer>
                        </>
                )
                } */}
                <BorderDiv />
                {review_result && review_result.length > 0 && (
                    <ReviewList 
                        review_count={review_count} 
                        review_result={review_result}
                        logged={logged}
                        user_id={user_id}
                        id={id}
                        getReviewList={getReviewList}
                        // 수정 삭제 등록 버튼 함수
                    />
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