import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;
const Content = styled.div`
    width: 70%;
    margin-left: 50px;
`;

const Cover = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;


const Writer = styled.h1`
    font-size: 45px;
    margin-bottom: 30px;
`;

const Divider = styled.span`
    margin: 0 7px;
`;

const InformationContainer = styled.div`
width: 100px;
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


const Reviews = ({ review_date, review_content, review_point, user_nickname, country_code}) => (
    // user_nickname
    // language_code
    // review_date
    // country_code
    // review_content
    // 국기
    // 버튼: 수정->수정, 삭제, 취소 | 전체 리뷰, 맛리뷰
    // 총 리뷰 수
    <Container>
        <Cover 
            bgImage = {
                // country_code
                require(`../../assets/korea.png`)
                // require(country_code.toString())
                // require("../../assets/no_image.png")
            }
        />
        <Content>
            <Writer>{user_nickname}</Writer>
                <Information>{review_date}</Information>
                <Divider>•</Divider>
                <Information>{review_point}</Information>
                <Divider>•</Divider>
                {/* <Information>
                    { result.genres && 
                    result.genres.map( 
                            (genre, index)  => index === result.genres.length -1 
                            ? genre.name 
                            : `${genre.name} / `
                        )
                    }
                </Information> */}
            <Overview>
                {review_content}
            </Overview>
        </Content>
    </Container>
);

export default Reviews;