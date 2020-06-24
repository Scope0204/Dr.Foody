import React from 'react';
import DataPresenter from './DataPresenter';
import {BaseUrl} from '../api';
import axios from 'axios';
import moment from 'moment';
import Moment from 'react-moment';
import {Api} from '../api';

// User inform
import XYChart from './Charts/XYChart';
import Area_With_Time from './Charts/Area_With_Time';
import Rader from './Charts/Rader';
import Map_with_bubbles from './Charts/Map_with_bubbles';

import Redial from './Charts/Redial';
import SimpleColumn from './Charts/SimpleColumn';
import Pictorial_Stacked from './Charts/Pictorial_Stacked';
import Pie_Chart_With_Legend from './Charts/Pie_Chart_With_Legend';
import ExportExcel from './Charts/ExportExcel';
// Clustering inform
import Clustering from './Clustering/Clustering';

// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

export default class extends React.Component{
    // 제품에 대한 받아야 할 데이터 
    // 
    constructor(props){
        super(props);
        const test_moment = new Date();
        const {
            match:{params:{food_id}}
          } = this.props;
        this.state = {
            moment: new Date(),
            previous_term: moment().format('YYYY-MM-DD'),
            later_term: moment().format('YYYY-MM-DD'),
            prod_search_result: null,
            prod_value_result: null,
            loading: false,
            food_id: food_id,
            chart: 'chartdiv',
            
            collapsible: null,

            first_condition: "",
            second_condition: "",
            third_condition: "",

            search_condition: null,
            all_data_result: null,
            source: 0,
            // // date picker
            // startDate: moment().format('YYYY-MM-DD'),
            // endDate: moment().format('YYYY-MM-DD')
        }
        this.refreshCondition = this.refreshCondition.bind(this);
    }

    refreshCondition = async(search_condition) => {
        const { food_id} = this.state;
        console.log("refreshCondition: 실행");
        let source = 0;
        const sdate = search_condition.previous_term;
        const edate = search_condition.later_term;
        if(search_condition.second_condition === 'views'){
            source = 0;
        } else if (search_condition.second_condition === 'reviews') {
            source = 1;
        }
        const {data: all_data_result} = await Api.service_exApi(food_id, source, sdate, edate);
        this.setState({
            all_data_result,
            source,
        });
        console.log(all_data_result);
        console.log(source);
    }

    // 검색 동작
    handleSearch= e => {
        e.preventDefault();
        console.log('Worked Search button');
        const {previous_term,later_term, second_condition, third_condition} = this.state;
        console.log('검색 조건 확인');
        // axios 동작 search_condition 보내기
        const search_condition = {
            previous_term,
            later_term,
            second_condition,
            third_condition,
        };
        this.refreshCondition(search_condition);
        this.setState({
            search_condition
        });
        console.log("second_condition: ", second_condition);
    };

    // 날짜 설정
    handleDateChange = (date, dateString) => {
        
        const dateFormat = 'YYYY-MM-DD';
        this.setState({
            previous_term: dateString[0],
            later_term:dateString[1],
        });
        console.log(date, dateString);
        const {previous_term,later_term } = this.state;
        console.log("날짜 변경 확인");
        console.log(previous_term,later_term);
    }

    // 조건 설정
    // 버튼 누르면 바로 로딩 버튼은 하나만 가능하게
    handleCondition= e => {
        e.preventDefault();
        const { target : {name, value}} = e;
        console.log('name: ',name);
        if(name==='first'){
            this.setState({
                first_condition: value
            });
        } else if (name==='second'){
            this.setState({
                second_condition: value
            });
        } else if(name==='third'){
            this.setState({
                third_condition: value
            });
        }
        console.log('   condition: ', this.state.first_condition,this.state.second_condition,this.state.third_condition);
    };

    
      componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }

    async componentDidMount() {
        console.log('DATA componentDidMount 실행: ');
        const { food_id } =this.state;
        console.log(food_id);
        this.setState({
            loading: true,
        });
        try {
            // food_id에 대한 정보 가져오는 api
            const {data : prod_search_result} = await Api.detailFood2Api(food_id);
            const {data : prod_value_result} = await Api.countryDataApi(food_id);;
            // 클러스터링 데이터 가져오기
            // const {data: {keyword_dict:collapsible}} = await Api.clusteringApi('불닭볶음면');
            // const {data: {keyword_dict:collapsible}} = 
            // await axios({
            //     method: "post",
            //     url: "http://35.230.114.182:5000/foodDict",
            //     headers: {
            //       //응답에 대한 정보
            //       Accept: "application/json", // 서버가 json 타입으로 변환해서 사용
            //       "Content-Type": "application/json",
            //     },
            //     data: {
            //       productName: food_name,
            //     },
            //   });
            // 유저 정보 데이터 가져오기
            console.log("DATA food_id: ");
            console.log(prod_search_result);
            // console.log("collapsible: ");
            // console.log(collapsible);
            this.setState({
                prod_search_result,
                prod_value_result,
                loading: false,
            });
        } catch (e) {
            this.setState({
                error: "Can't find results information",
                loading: false,
            });
        }
    }

      render() {
          const {
            chart, food_id,
            previous_term, later_term,   
            first_condition,second_condition,third_condition, search_condition, all_data_result, source,
            prod_search_result,prod_value_result,  loading} = this.state;
        return (
            // <>
            //     이걸로 감싸고
            //     chart component들을 만든 다음에 DataPresenter 밑에 같이 랜더해보기
            // </>
            <>
                <DataPresenter 
                    chart = {chart}
                    food_id = {food_id}
                    previous_term = {previous_term} 
                    later_term = {later_term} 
                    first_condition = {first_condition}
                    second_condition = {second_condition}
                    third_condition = {third_condition}
                    prod_search_result= {prod_search_result}
                    prod_value_result= {prod_value_result}
                    search_condition= {search_condition}
                    all_data_result= {all_data_result}
                    source= {source}
                    loading = {loading}
                    handleSearch = {this.handleSearch}
                    handleCondition = {this.handleCondition}
                    handleDateChange = {this.handleDateChange}
                    refreshCondition = {this.refreshCondition}
                />
                {/* 유저 정보 분석 */}
                
            </>
        );
      }
    }