import React from 'react';
import styled from 'styled-components';
import SearchController from './SearchController';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';
// import Loader from '../../Loader';
// import Chart from './Charts/XYChart';

// height: calc(100vh - 50px);
const ShowContainer = styled.div`
    width: 100%;
    height: 70%;
    position: relative;
    padding: 50px;
    background-color: black;
`;

// 제품 기본 정보
const ProdInform = styled.div`
    display: flex;
    width: 30%;
    height: 30%;
    position: relative;
    background-color: red;
`;
const ProdImage = styled.div`
    width: 150px;
    height: 150px;
    background-color: green;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;
//     background-image: url(${props => props.bgPoster});
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

// Date Setting Group
const DateGroup = styled.div`
    width: 100%;
    background-color: orange;
`;
const DateButton = styled.button`
    background-color: ${props => (props.current ? "#3498db" : "transparent")};
    &:hover {
        background-color: red;
    }
`;
const Calender = styled.div`
`;


// Control Button Group
const ButtonGroup = styled.div`
    width: 100%;
    background-color: skyblue;
`;
const ControlButton = styled.button`
    background-color: ${props => (props.current ? "#3498db" : "transparent")};
    &:hover {
        background-color: red;
}
`;


const SearchButton = styled.button`

`;

// Chart
const ChartPresenter = styled.div`

`;

// 받아야할 정보
//  food_name STRING
// food_photo STRING
// 조회수 - searchT count food_id INT
// 선호 성별 - searchT where=search_sex"남 여" count (남여 계산해서 서로 빼기) BOOL
// 총 리뷰 수 - reviewT where =food_id count INT
// 인기 국가 - reviewT user_id join country_code orderby 제일 첫번째 STRING


const test_result = {
    food_name : '신라면',   
    food_photo : null,   
    views : 100,   
    all_reviews : 1000,   
    gender_of_popular : false,   
    country_of_popular : '한국',   
}

// Handle button
//  handleSearch
//  handleControlButton

const DataPresenter = ({genesis_term,  previous_term, later_term, termCheck, condition, date_condition, result, loading, handleControlButton, handleTerm, handleSearch,handleCondition}) => (
    <ShowContainer>
        <ProdInform>
            <ProdImage 
                // bgPoster = {
                //     result.food_photo 
                //     ?  `${result.food_photo}`
                //     : require("../../assets/no_image1.png")
                // }
            />
            <Data>
                <Title>{test_result.food_name}</Title>
                <InformationContainer>
                    <Information>{`총 조회 수: ${test_result.views}`}</Information>
                    <Divider>•</Divider>
                    <Information>{`총 리뷰 수: ${test_result.all_reviews}`}</Information>
                    <Divider>•</Divider>
                    <Information>
                        {test_result.gender_of_popular
                            ? `인기 성별: 남성`
                            : `인기 성별: 여성`
                        }
                    </Information>
                    <Divider>•</Divider>
                    <Information>{`인기 국가: ${test_result.country_of_popular}`}</Information>
                </InformationContainer>
            </Data>
        </ProdInform>
        <DateGroup>
            <DateButton current= { date_condition === 'all' }   name='all' value='all' onClick={handleTerm}>전체</DateButton>
            <DateButton current= { date_condition === 'today'} name='today' value='today'  onClick={handleTerm}>오늘</DateButton>
            <DateButton current= { date_condition === 'week'}  name='week'  value='week' onClick={handleTerm}>일주일</DateButton>
            <DateButton current= { date_condition === 'month'} name='month' value='month'  onClick={handleTerm}>한달</DateButton>
            <SearchButton onClick={handleSearch}>검색</SearchButton>
        </DateGroup>
        <ButtonGroup>
            <ControlButton current={ condition === 'country' } name='country' value='country' onClick={handleCondition}>국가</ControlButton>
            <ControlButton current={ condition === 'gender' }  name='gender' value='gender' onClick={handleCondition}>성별</ControlButton>
            <ControlButton current={ condition === 'age' }     name='age' value='age' onClick={handleCondition}>연령</ControlButton>
            <ControlButton current={ condition === 'review' }  name='review' value='review' onClick={handleCondition}>리뷰</ControlButton>
            <ControlButton current={ condition === 'region' }  name='region' value='region' onClick={handleCondition}>국내지역</ControlButton>
        </ButtonGroup>
    </ShowContainer>
);

export default DataPresenter;