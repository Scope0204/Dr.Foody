import React from 'react';
import DataPresenter from './DataPresenter';
import {BaseUrl} from '../api';
import axios from 'axios';
import moment from 'moment';
import Moment from 'react-moment';
import {Api} from '../api';

// Chart import 
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import XYChart from './Charts/XYChart';
import Redial from './Charts/Redial';
import SimpleColumn from './Charts/SimpleColumn';
import Pictorial_Stacked from './Charts/Pictorial_Stacked';
import Pie_Chart_With_Legend from './Charts/Pie_Chart_With_Legend';
import RegionTable from './Charts/RegionTable';


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
            genesis_term: test_moment,
            previous_term: test_moment,
            later_term: test_moment,
            termCheck: "",
            condition: "",
            date_condition: "",
            prod_search_result: null,
            prod_value_result: null,
            loading: false,
            food_id: food_id,
            chart: 'chartdiv'

            // // date picker
            // startDate: moment().format('YYYY-MM-DD'),
            // endDate: moment().format('YYYY-MM-DD')
        }
    }

   

    // 조건 설정
    // handleControlButton= e => {
    //     e.preventDefault();
    //     console.log('Worked Control button');
    // };

    // 검색 동작
    handleSearch= e => {
        e.preventDefault();
        console.log('Worked Search button');
        this.searchByDate();
    };
    // 날짜 검색
    handleDateChange = (date, dateString) => {
        console.log(date, dateString);
    }
    // async() => { 
    //         const { previous_term, later_term } = this.state;
    //         this.setState({ loading: true});
    //         try {
    //             const {data :{ result:result }} = 
    //                 await axios.post('/api/data/searchDate',{
    //                         previous_term,
    //                         later_term
    //                 });
    //             this.setState({
    //                 result
    //             });
    //             console.log(this.state.result);
    //         } catch {
    //             this.setState({ error: "Can't search"});
    //         } finally {
    //             this.setState({ loading: false});
    //         }
        // }

    // 조건 설정
    // 버튼 누르면 바로 로딩 버튼은 하나만 가능하게
    handleCondition= e => {
        e.preventDefault();
        const { target : {name, value}} = e;
        this.setState({
            condition: value
        });
        console.log('Worked Search button');
        console.log('   Condition: ', this.state.condition);
    };

    // amChart
    // componentDidMount() {
    //     const {condition} = this.state;
        
    //   }
    
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
            const {data : prod_search_result} = await Api.detailFood2Api(food_id);
            const {data : prod_value_result} = await Api.countryDataApi(food_id);;
            console.log("DATA food_id: ");
            console.log(prod_search_result);
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
            chart, date_condition, 
            genesis_term, previous_term, later_term, termCheck, condition, prod_search_result,prod_value_result,  loading} = this.state;
        return (
            // <>
            //     이걸로 감싸고
            //     chart component들을 만든 다음에 DataPresenter 밑에 같이 랜더해보기
            // </>
            <>
                <DataPresenter 
                    chart = {chart}
                    genesis_term = {genesis_term}
                    previous_term = {previous_term} 
                    later_term = {later_term} 
                    termCheck = {termCheck} 
                    condition = {condition}
                    date_condition={date_condition}
                    prod_search_result= {prod_search_result}
                    loading = {loading}
                    handleControlButton = {this.handleControlButton}
                    handleSearch = {this.handleSearch}
                    handleCondition = {this.handleCondition}
                    handleDateChange = {this.handleDateChange}
                />
                { condition==='gender' && (
                    <XYChart prod_value_result={prod_value_result}/>
                )}
                { condition==='region' && (
                    <RegionTable prod_value_result={prod_value_result}/>
                )}
                { condition==='country' && (
                    <SimpleColumn prod_value_result={prod_value_result}/>
                )}
                { condition==='age' && (
                    <Pictorial_Stacked prod_value_result={prod_value_result}/>
                )}
                { condition==='review' && (
                    <Pie_Chart_With_Legend prod_value_result={prod_value_result}/>
                )}
            </>
            // <DayPickerRangeController
            //     startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            //     endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            //     onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            //     focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            //     onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            //     initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
            // />
        );
      }
    }