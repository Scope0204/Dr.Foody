import React from 'react';
import DataPresenter from './DataPresenter';
import axios from 'axios';
import moment from 'moment';
import Moment from 'react-moment';

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
        this.state = {
            moment: new Date(),
            genesis_term: test_moment,
            previous_term: test_moment,
            later_term: test_moment,
            termCheck: "",
            condition: "",
            date_condition: "",
            result: null,
            loading: false,
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

    // 기간 설정
    handleTerm= e => {
        e.preventDefault();
        const { target : {name, value}} = e;
        // const {test_moment, genesis_term} = this.state;
        // const statndard_term = new Date('2020-05-01');
        let previous_val, later_val = moment().format('YYYY-MM-DD');
        // if(name === 'previous'){
        //     previous_val = value;
        // } else if (name === 'later'){
        //     later_val = value
        // } else if (name==='all'){
        //     // 서비스 시작일 부터 지금까지
        //     previous_val = statndard_term;
        //     later_val = genesis_term
        // } else if (name==='today'){
        //     previous_val = genesis_term;
        //     later_val = genesis_term
        // } else if (name==='week'){
        //     previous_val = moment.add('days', -7);
        //     later_val = test_moment;
        // } else if (name==='month'){
        //     previous_val = moment.add('months', -1);
        //     later_val = genesis_term
        // }
        this.setState({
            previous_term: previous_val,
            later_term: later_val,
            date_condition: value
        });
        console.log('Worked Term button');
        console.log("   previous: ",this.state.previous_term);
        console.log("   later: ",this.state.later_term);
        console.log("   date_condition: ",this.state.date_condition);
    };

    // 검색 동작
    handleSearch= e => {
        e.preventDefault();
        console.log('Worked Search button');
        this.searchByDate();
    };
    // 날짜 검색
    searchByDate = () => {
        console.log("   previous: ",this.state.previous_term);
        console.log("   later: ",this.state.later_term);
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
    componentDidMount() {
        const {condition} = this.state;
        // xy chart, condition = country
        
        // if ( condition === 'country') {
        
        //     chart.paddingRight = 20;
        
        //     let data = [];
        //     let visits = 10;
        //     for (let i = 1; i < 366; i++) {
        //       visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        //       data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
        //     }
        
        //     chart.data = data;
        
        //     let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        //     dateAxis.renderer.grid.template.location = 0;
        
        //     let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        //     valueAxis.tooltip.disabled = true;
        //     valueAxis.renderer.minWidth = 35;
        
        //     let series = chart.series.push(new am4charts.LineSeries());
        //     series.dataFields.dateX = "date";
        //     series.dataFields.valueY = "value";
        
        //     series.tooltipText = "{valueY.value}";
        //     chart.cursor = new am4charts.XYCursor();
        
        //     let scrollbarX = new am4charts.XYChartScrollbar();
        //     scrollbarX.series.push(series);
        //     chart.scrollbarX = scrollbarX;
        
        //     this.chart = chart;
        // } else {
        
        //     chart.paddingRight = 20;
        
        //     let data = [];
        //     let visits = 10;
        //     for (let i = 1; i < 366; i++) {
        //       visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        //       data.push({ date: new Date(2020, 0, i), name: "name" + i, value: visits });
        //     }
        
        //     chart.data = data;
        
        //     let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        //     dateAxis.renderer.grid.template.location = 0;
        
        //     let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        //     valueAxis.tooltip.disabled = true;
        //     valueAxis.renderer.minWidth = 35;
        
        //     let series = chart.series.push(new am4charts.LineSeries());
        //     series.dataFields.dateX = "date";
        //     series.dataFields.valueY = "value";
        
        //     series.tooltipText = "{valueY.value}";
        //     chart.cursor = new am4charts.XYCursor();
        
        //     let scrollbarX = new am4charts.XYChartScrollbar();
        //     scrollbarX.series.push(series);
        //     chart.scrollbarX = scrollbarX;
        
        //     this.chart = chart;
        // }
      }
    
      componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }

      render() {
          const {
            chart, date_condition, 
            genesis_term, previous_term, later_term, termCheck, condition, result, loading} = this.state;
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
                    result= {result}
                    loading = {loading}
                    handleControlButton = {this.handleControlButton}
                    handleTerm = {this.handleTerm}
                    handleSearch = {this.handleSearch}
                    handleCondition = {this.handleCondition}
                />
                { condition==='gender' && (
                    <XYChart />
                )}
                { condition==='region' && (
                    <RegionTable />
                )}
                { condition==='country' && (
                    <SimpleColumn />
                )}
                { condition==='age' && (
                    <Pictorial_Stacked />
                )}
                { condition==='review' && (
                    <Pie_Chart_With_Legend />
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