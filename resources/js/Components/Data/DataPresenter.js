import React from 'react';
import styled from 'styled-components';
import SearchController from './SearchController';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

// User inform
import XYChart from './Charts/XYChart';
import Area_With_Time from './Charts/Area_With_Time';
import Rader from './Charts/Rader';
import Map_with_bubbles from './Charts/Map_with_bubbles';
import Chart from './Charts/Chart';

import Redial from './Charts/Redial';
import SimpleColumn from './Charts/SimpleColumn';
import Pictorial_Stacked from './Charts/Pictorial_Stacked';
import Pie_Chart_With_Legend from './Charts/Pie_Chart_With_Legend';
import ExportExcel from './Charts/ExportExcel';
// Clustering inform
import Clustering from './Clustering/Clustering';

// height: calc(100vh - 50px);
const ShowContainer = styled.div`
    width: 80%;
    height: 70%;
    position: relative;
    padding: 50px;
    background-color: white;
    left: 50%;
    transform: translate(-50%);
`;

// 제품 기본 정보
const ProdInform = styled.div`
    display: flex;
    width: 30%;
    height: 30%;
    position: relative;
    background-color: white;
`;
const ProdImage = styled.div`
    width: 150px;
    height: 150px;
    background-color: green;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
        background-image: url(${props => props.bgPoster});
`;
const Data = styled.div`
    width: 70%;
    margin-left: 50px;
`;
const Title = styled.h1`
    font-size: 45px;
    margin-bottom: 30px;
    color: black;
`;
const Divider = styled.span`
    margin: 0 7px;
`;
const InformationContainer = styled.div`
`;
const Information = styled.span`
    font-size: 15px;
    margin-bottom: 20px;
    color: black;
`;

// Date Setting Group
const DateGroup = styled.div`
    width: 100%;
    background-color: white;
`;
const DateButton = styled.button`
    background-color: ${props => (props.current ? "white" : "transparent")};
    &:hover {
        background-color: white;
    }
`;
const Calender = styled.div`
`;


// Control Button Group
const ButtonGroup = styled.div`
    width: 100%;
    background-color: white;
`;
const ControlButton1 = styled.button`
    background-color: ${props => props.current ? "red" : "white"};
    &:hover {
        background-color: pink;
}
`;
const ControlButton2 = styled.button`
    background-color: ${props => props.current ? "tomato" : "white"};
    &:hover {
        background-color: tomato;
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


const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const currentDate = new Date(dateFormat);
const { RangePicker} = DatePicker;


  
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
  }
  
  

const DataPresenter = ({chart, previous_term, later_term, prod_value_result,food_id,
    first_condition, second_condition, third_condition, prod_search_result, loading, search_condition, all_data_result,source,
    handleSearch,handleCondition,handleDateChange, refreshCondition}) => 
    (
    <>
    
    <ShowContainer>
        <RangePicker onChange={handleDateChange}  format={dateFormat}  disabledDate={disabledDate} 
            ranges={{
                Today: [moment(), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('day')],
                'A Week': [moment().startOf('day').subtract(7, 'days'), moment().endOf('day')],
            }}

            defaultValue={[moment(), moment()]}
            // defaultPickerValue={moment, moment}
        />
        {prod_search_result &&  (
            <>
                <ProdInform>
                    <ProdImage 
                        bgPoster = {
                            prod_search_result.food_photo 
                            ?  prod_search_result.food_photo
                            : require("../../assets/no_image.png")
                        }
                    />
                    <Data>
                        <Title>{prod_search_result.food_name}</Title>
                        <InformationContainer>
                            <Information>{`총 조회 수: ${prod_search_result.search_count}`}</Information>
                            <Divider>•</Divider>
                            <Information>{`총 리뷰 수: ${prod_search_result.review_count}`}</Information>
                            <Divider>•</Divider>
                            <Information>
                                {prod_search_result.sex}
                            </Information>
                            <Divider>•</Divider>
                            <Information>{`인기 국가: ${prod_search_result.country}`}</Information>
                        </InformationContainer>
                    </Data>
                </ProdInform>
                {/* 최상위 조건 */}
                <ButtonGroup>
                    <ControlButton1 current={ first_condition === 'user_inform' }  value='user_inform' name="first" onClick={handleCondition}>자사 서비스 분석</ControlButton1>
                    <ControlButton1 current={ first_condition === 'clustering' }   value='clustering' name="first" onClick={handleCondition}>크롤링 데이터 분석</ControlButton1>
                </ButtonGroup>
                {first_condition && first_condition==='user_inform' && (
                    <>
                        <ButtonGroup>
                            <ControlButton2 current={ second_condition === 'views' } value='views' name="second" onClick={handleCondition}>리뷰 정보</ControlButton2>
                            <ControlButton2 current={ second_condition === 'reviews' }  value='reviews' name="second" onClick={handleCondition}>조회 정보</ControlButton2>
                        </ButtonGroup>
                    </>
                )}
                <ControlButton1 name='search' value='search' type='submit' onClick={handleSearch}>검색</ControlButton1>
            </>
        )}
        {first_condition === 'user_inform' && all_data_result && all_data_result.length > 0 && ( 
                    <Chart 
                        all_data_result = {all_data_result}
                        food_id = {food_id}
                        source = {source}
                    />
        )}
                {/* 클러스터링 정보 */}
                {first_condition === 'clustering' && (
                    <>
                        <Clustering food_name={prod_search_result.food_name} />
                    </>
                )}
    </ShowContainer>
    </>
);

export default DataPresenter;