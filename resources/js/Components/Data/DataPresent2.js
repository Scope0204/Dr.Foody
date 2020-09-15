import React from 'react';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import Clustering from './Clustering/Clustering';
import { Button } from 'antd';
import Loading from '../Loading';
// User inform
import ViewChart from './Charts/ViewChart';
import ReviewChart from './Charts/ReviewChart';

import Pie_Chart_With_Legend from './Charts/Pie_Chart_With_Legend';
import Pie_Chart_With_Legend_review from './Charts/Pie_Chart_With_Legend_review';
import Map_with_bubbles from './Charts/Map_with_bubbles';
import Date_Based from './Charts/Date_Based';

import { load } from '@amcharts/amcharts4/.internal/core/utils/Net';
import XYChart from './Charts/XYChart';
// Clustering inform

// Control Button Group
// const ButtonGroup = styled.div`
//     background-color: white;
//     display:inline;
// `;
const ButtonGroup = styled.div`
    width: 100%;
    background-color: white;
`;
const ControlButton1 = styled.button`
    background-color: ${props => props.current ? "red" : "white"};
    &.outline {
        font-weight: 700;
        position: relative;
        z-index: 3;
        background: transparent;
        background-color: ${props => props.current ? "#ff8026" : "white"};
        color: ${props => props.current ? "white" : "black"};
        font-size: 14px;
        border-color: #d3d3d3;
        border-style: solid;
        border-width: 1px;
        border-radius: 22px;
        padding: 10px 10px;
        text-transform: uppercase;
        transition: all 0.2s linear;
        a {
            text-decoration: none;
        }
        margin-left: 30px;
    }
    &.outline:hover {
        color: white;
        background: #ff8026;
        border-color: white;
        transition: all 0.2s linear;
    }
    &.outline:active {
        border-radius: 22px;
    }
    &.green-white {
        font-weight: 700;
        color: #7dc21e;
        border-color: #ff8026;
        background: transparent;
    }
    &.green-white:hover {
        color: white;
        background: #7dc21e;
        border-color: #ff8026;
    }
    &.purple-white {
        font-weight: 700;
        color: #664e96;
        border-color: #ff8026;
        background: transparent;
    }
    &.purple-white:hover {
        color: white;
        background: #664e96;
        border-color: #ff8026;
    }
}
`;
const ControlButton2 = styled.button`
    background-color: ${props => props.current ? "tomato" : "white"};
    &.outline {
      position: relative;
      z-index: 3;
      background: transparent;
      color: #1172c4;
      font-size: 14px;
      border-color: #ff8026;
      border-style: solid;
      border-width: 1px;
      border-radius: 22px;
      padding: 10px 10px;
      text-transform: uppercase;
      transition: all 0.2s linear;
      a {
          text-decoration: none;
      }
      margin-left: 30px;
  }
  &.outline:hover {
      color: white;
      background: #ff8026;
      border-color: white;
      transition: all 0.2s linear;
  }
  &.outline:active {
      border-radius: 22px;
  }
  &.green-white {
      font-weight: 700;
      color: #0587B3;
      border-color: #d3d3d3;
      background: transparent;
      background-color: ${props => props.current ? "#ff8026" : "white"};
      color: ${props => props.current ? "white" : "black"};
  }
  &.green-white:hover {
      color: white;
      background: #ff8026;
      border-color: #0587B3;
  }
  &.purple-white {
      font-weight: 700;
      color: #04C9C7;
      border-color: #d3d3d3;
      background: transparent;
      background-color: ${props => props.current ? "#ff8026" : "white"};
      color: ${props => props.current ? "white" : "black"};
  }
  &.purple-white:hover {
      color: white;
      background: #ff8026;
      border-color: #04C9C7;
  }
  &.search-color {
    font-weight: 700;
    color: #04C9C7;
    border-color: #ff8026;
    background: transparent;
  }
  &.search-color:hover {
      color: white;
      background: #04C9C7;
      border-color: #ff8026;
  }
}
`;

const SearchButton = styled.button`

`;

// Chart
const ChartPresenter = styled.div`

`;


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // position: 'relative',
    width: 400,
    // position: 'float',
    // float: 'right',
    left: 0,
    // top: '20%',
    // border: '3px solid black',
    // position: 'fixed',
    // transform: 'translate(-150%)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(5%)',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 80,
    width: 80,
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const ShowContainer = styled.div`
    top:150px;
    width: 100%;
    position: absolute;
    `;
    // border: 3px solid orange;
    //height: 100%;
    //padding: 7%;
    //  transform: translate(-5%);
    // position: relative;
    const ChartContainer = styled.div`
    width: 75%;
    height: 100%;
    position: absolute;
    `;
    // border: 3px solid black;

const ProdImage = styled.div`
    width: 200px;
    height: 200px;
    background-color: green;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
        background-image: url(${props => props.bgPoster});
        transform: translate(50%);
`;
const ProgressDiv = styled.div`
top: 50%;
left: 50%;
    transform: translate(50% 50%);
`;

const Border = styled.div`
transform: translate(10%);
width: 85%;
border-bottom: solid 2px gray;
`;
const TextDiv = styled.div`
    font-size: 14px;
    padding-top: 15px;
`;
const SpaceDiv = styled.div`
    background-color: white;
    height: 16px;
`;
const ProductTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
`;
const ProductInform = styled.div`
    font-size: 18px;
    font-weight: 450;
    margin-bottom: 7px;
`;
const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const currentDate = new Date(dateFormat);
const { RangePicker } = DatePicker;

function disabledDate(current) {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
  }

export default function MediaControlCard({chart, previous_term, later_term, prod_value_result,food_id, reviewed,visible,error,
  first_condition, second_condition, third_condition, prod_search_result, loading, search_condition, all_data_result,source, third_data_result,
  handleSearch,handleCondition,handleDateChange, refreshCondition}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
    <ShowContainer>
        <Grid container >
        {prod_search_result && (
          <Grid
            item xs={3}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <>
                <Card className={classes.root}>
                    <ProdImage 
                        bgPoster = {
                            prod_search_result.food_photo 
                            ?  prod_search_result.food_photo
                            : require("../../assets/no_image.png")
                        }
                    />
                    <Border />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <ProductTitle >
                          {prod_search_result.food_name}
                        </ProductTitle>
                        <SpaceDiv />
                        <ProductInform variant="subtitle1" color="textSecondary">
                            {`全体検索数: ${prod_search_result.search_count}`}
                        </ProductInform>
                        <ProductInform variant="subtitle1" color="textSecondary">
                            {`全体レビュー数: ${prod_search_result.review_count}`}
                        </ProductInform>
                        <ProductInform variant="subtitle1" color="textSecondary">
                            {/* {`人気性別: ${prod_search_result.sex}`} */}
                            {`人気性別: 男性`}
                        </ProductInform>
                        <ProductInform variant="subtitle1" color="textSecondary">
                            {/* {`人気国家: ${prod_search_result.country}`} */}
                            {`人気国家: 日本`}
                        </ProductInform>
                        </CardContent>
                    </div>
                    <Border />
                    <div className={classes.button}>
                        <TextDiv>期間設定</TextDiv>
                        <RangePicker onChange={handleDateChange}  format={dateFormat}  disabledDate={disabledDate} 
                            ranges={{
                                Today: [moment(), moment()],
                                'A Month': [moment().startOf('month'), moment().endOf('day')],
                                'A Week': [moment().startOf('day').subtract(7, 'days'), moment().endOf('day')],
                                'All Time': [moment([2020,0,1]), moment().endOf('day')]
                            }}
                        />
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <ControlButton1 current={ first_condition === 'user_inform' } className="outline" value='user_inform' name="first" onClick={handleCondition}>自社サービス分析</ControlButton1>
                            <ControlButton1 current={ first_condition === 'clustering' } className="outline"  value='clustering' name="first" onClick={handleCondition}>クローリングデータ分析</ControlButton1>
                        </ButtonGroup>
                        {first_condition && first_condition==='user_inform' && (
                            <>
                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <ControlButton2 current={ second_condition === 'views' } className="outline green-white" value='views' name="second" onClick={handleCondition}>レビュー情報</ControlButton2>
                                    <ControlButton2 current={ second_condition === 'reviews' } className="outline green-white" value='reviews' name="second" onClick={handleCondition}>検索情報</ControlButton2>
                                </ButtonGroup>
                                {second_condition && second_condition!=='' && 
                                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                                        <ControlButton2 current={ third_condition === 'gender' } className="outline purple-white" value='gender' name="third" onClick={handleCondition}>性別</ControlButton2>
                                        <ControlButton2 current={ third_condition === 'age' } className="outline purple-white" value='age' name="third" onClick={handleCondition}>年齢</ControlButton2>
                                        <ControlButton2 current={ third_condition === 'country' } className="outline purple-white" value='country' name="third" onClick={handleCondition}>国家</ControlButton2>
                                        <ControlButton2 current={ third_condition === 'term' } className="outline purple-white" value='term' name="third" onClick={handleCondition}>期間</ControlButton2>
                                    </ButtonGroup>
                                }
                            </>
                        )}
                        <Button className="outline search-color" name='search' value='search' type='submit' onClick={handleSearch}>検索</Button>
                    </div>
                </Card>
            </>
          </Grid>
        )}
          {loading? (
              <Loading />
          )
          :
          (
            <Grid
                item xs={9}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
            <>
                <ChartContainer >
                    {first_condition === 'user_inform' && all_data_result && visible===true && ( 
                                      <>
                                          {second_condition === 'views' && reviewed===false && (
                                              <>
                                                  {third_condition === "" && (
                                                      <ReviewChart 
                                                          all_data_result = {all_data_result}
                                                          food_id = {food_id}
                                                          source = {source}
                                                      />
                                                  )}
                                                  {third_condition==='gender' && third_data_result && reviewed===false && (
                                                      <Pie_Chart_With_Legend_review  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                                  {third_condition==='age' && third_data_result && reviewed===false && (
                                                      <XYChart  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                                  {third_condition==='country' && third_data_result && reviewed===false && (
                                                      <Map_with_bubbles  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                                  {third_condition==='term' && third_data_result && reviewed===false && (
                                                      <Date_Based  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                              </>
                                          )}
                                          {/* 3차 트리 조회+성별 일 떄 */}
                                          {second_condition === 'reviews' && reviewed===true && (
                                              <>
                                                  {third_condition === "" && (
                                                      <ViewChart 
                                                          all_data_result = {all_data_result}
                                                          food_id = {food_id}
                                                          source = {source}
                                                      />
                                                  )}
                                                  {third_condition==='gender' && third_data_result   && reviewed===true && (
                                                      <Pie_Chart_With_Legend  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                                  {third_condition==='age' && third_data_result && reviewed===true && (
                                                      <XYChart  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                                  {third_condition==='country' && third_data_result && reviewed===true && (
                                                      <Map_with_bubbles  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                                  {third_condition==='term' && third_data_result && reviewed===true && (
                                                      <Date_Based  
                                                        third_data_result = {third_data_result}
                                                        source={source}
                                                        />
                                                  )}
                                              </>
                                          )}
                                      </>
                          )}
                            {/* 클러스터링 정보 */}
                            {first_condition === 'clustering' && visible===true && (
                                <>
                                    <Clustering food_name={prod_search_result.food_name} />
                                </>
                            )}
                    </ChartContainer>
                    {error && (
                        <div>검색 결과가 없습니다.</div>
                    )}
                </>
            </Grid>
            )}
            </Grid>
        </ShowContainer>
    </>
  );
          }