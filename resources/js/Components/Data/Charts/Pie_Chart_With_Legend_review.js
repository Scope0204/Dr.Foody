import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import {Radar} from 'react-chartjs-2';
import { Table } from 'antd';
// import { transform } from 'lodash';
// import { nodeName } from 'jquery';

const ChartDiv = styled.div`
  width: 95%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #dddddd;
`;
const PointDiv = styled.div`
padding-bottom: 25px;
`;
const PointSpan = styled.span`
  font-size: 16px;
  color: black;
`;

// left: 50%;
//   transform: translate(25%);
const InformDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns : 29% 29% 36%;
  `;
  // border: 1px solid black;
const TextDiv = styled.div`
padding-top: 5px;
padding-bottom: 5px;
margin-bottom: 50px;
text-align: center;
background: #dddddd;
font-weight: 600;
color: black;
width: 95%;
`;
const RadarDiv = styled.div`
  width: 50%;
`;
const TablesDiv = styled.div`
  width: 100%;
  position: relative;
  
`;

const ManTableDiv = styled.div`
  width: 45%;
  margin-left: 5%;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #92A8D1;

`;
const WomanTableDiv = styled.div`
  width: 45%;
  margin-left: 5%;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #F7CAC9;

`;

am4core.useTheme(am4themes_animated);

class Pie_Chart_With_Legend_review extends Component {
  constructor(props){
    super(props);
    this.chartReference = React.createRef();
    this.state = {
        third_data_result: this.props.third_data_result,
        source:  this.props.source, // false = 0리뷰, true = 1조회
        source_bool:  false, // false = 0리뷰, true = 1조회
        loading:  false, // false = 0리뷰, true = 1조회
        man_point: 0,
        woman_point: 0,
        man_count: 0,
        woman_count: 0,
        count: 0,
        chartRef: null,
        radar_data : null,
        // downloadChart: this.downloadChart,
        men_columns :[
          {
              title: '맛',
              dataIndex: 'name',
              width: 30,
          },
          {
              title: '리뷰 수',
              dataIndex: 'i1',
              width: 20,
          }],
        women_columns :[
          {
              title: '맛',
              dataIndex: 'name',
              width: 30,
          },
          {
              title: '리뷰 수',
              dataIndex: 'i1',
              width: 20,
          }],
        men_table_data: null,
        women_table_data: null,
    }
}

  componentDidMount() {
    this.setState({
      loading: true,
      });
      const {third_data_result, source} = this.state;
      console.log('파이차티 third_data_result: ', third_data_result);
      // Create chart instance
      let chart = am4core.create("Pie_Chart_With_Legend_review", am4charts.PieChart);
      
      // 여백, 마진 
      chart.autoMargins = false;

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";

      // Let's cut a hole in our Pie chart the size of 30% the radius
      chart.innerRadius = am4core.percent(30);

      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
          {
            "property": "cursor",
            "value": "pointer"
          }
        ];

      pieSeries.alignLabels = false;
      pieSeries.labels.template.bent = true;
      pieSeries.labels.template.radius = 3;
      pieSeries.labels.template.padding(0,0,0,0);

      pieSeries.ticks.template.disabled = true;

      // Create a base filter effect (as if it's not there) for the hover to return to
      let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
      shadow.opacity = 0;

      // Create hover state
      let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

      // Slightly shift the shadow and make it more prominent on hover
      let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;
      pieSeries.slices.template.propertyFields.fill = "color";
      // Add a legend
      chart.legend = new am4charts.Legend();

      // 차트 데이터 삽입
      // #F7CAC9
// #92A8D1
// radar chart
let men_columns= [
  {
      title: '味',
      dataIndex: 'name',
      width: 25,
  },
  {
      title: 'レビューの数',
      dataIndex: 'i1',
      width: 20,
  }]; 
  let women_columns= [
    {
        title: '味',
        dataIndex: 'name',
        width: 25,
    },
    {
        title: 'レビューの数',
        dataIndex: 'i1',
        width: 20,
    }]; 
let men_data = [];
let women_data = [];
let men_table_data = [];
let women_table_data = [];
console.log('third_data_result.favorite_data.length');
console.log(third_data_result.favorite_data.length);
for(let i=0; i < third_data_result.favorite_data.length; i++) {
  let flavor = '';
  switch(third_data_result.favorite_data[i].favorite){
    // '甘味', '辛味','酸味','苦味',  '塩味'
    case '단 맛':
      flavor = '甘味';
      break;
    case '쓴 맛':
      flavor = '苦味';
      break;
    case '매운 맛':
      flavor = '辛味';
      break;
    case '신 맛':
      flavor = '酸味';
      break;
    case '짠 맛':
      flavor = '塩味';
      break;
  }
  if(third_data_result.favorite_data[i].user_sex === 1){
    women_table_data.push({
      key: i,
      name: flavor,
      // name: third_data_result.favorite_data[i].favorite,
      i1: third_data_result.favorite_data[i].favorite_count!==0? third_data_result.favorite_data[i].favorite_count : "0"
    });
    women_data.push(third_data_result.favorite_data[i].favorite_count);
  } else if (third_data_result.favorite_data[i].user_sex === 0){
    men_table_data.push({
      key: i,
      // name: third_data_result.favorite_data[i].favorite,
      name: flavor,
      i1: third_data_result.favorite_data[i].favorite_count!==0? third_data_result.favorite_data[i].favorite_count : "0"
    });
    men_data.push(third_data_result.favorite_data[i].favorite_count);
  }
}
let radar_data = {
  labels: [ '甘味', '辛味','酸味','苦味',  '塩味'],
  datasets: [
    {
      label: '男性のレビュー数',
      backgroundColor: 'rgba(146, 168, 209, 0.2)',
      borderColor: '#92A8D1',
      pointBackgroundColor: '#92A8D1',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#92A8D1',
      data: men_data
    },
    {
      label: '女性のレビュー数',
      backgroundColor: 'rgba(247, 202, 201, 0.2)',
      borderColor: '#F7CAC9',
      pointBackgroundColor: '#F7CAC9',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#F7CAC9',
      data: women_data
    }
  ]
};

      // 리뷰 차트
      let  data = [{
          "country" : "男性",
          "litres" : third_data_result.data[0].review_count,
          "color": am4core.color("#92A8D1"),
        },
        {
          // "country" : third_data_result.data[1].country,
          "country" : "女性",
          "litres" : third_data_result.data[1].review_count,
          "color": am4core.color("#F7CAC9"),
        }];
        this.setState({
          man_point: third_data_result.data[0].litres,
          woman_point: third_data_result.data[1].litres,
        });
      let count = third_data_result.data[0].review_count + third_data_result.data[1].review_count;
      this.setState({
        loading: false,
        count,
        man_count: third_data_result.data[0].review_count,
        woman_count: third_data_result.data[1].review_count,
        radar_data,
        women_columns,
        men_columns,
        men_table_data,
        women_table_data,
      });
      console.log('파이차트 data: ', data);
      chart.data = data;
      chart.exporting.menu = new am4core.ExportMenu();
      chart.exporting.menu.align = "left";
      chart.exporting.menu.verticalAlign = "top";
      

    console.log('왜 안되....',this.chartReference);
    this.setState({
      chartRef: this.chartReference
    });
      
    }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps.third_data_result !== this.props.third_data_result){
        this.setState({
          third_data_result: this.props.third_data_result,
          source: this.props.third_data_result
        });
    } 
    }
  
// data 
// {
//   "data": [
//       {
//           "country": "남자",
//           "review_count": 65,
//           "litres": 3.6
//       },
//       {
//           "country": "여자",
//           "review_count": 59,
//           "litres": 3.4
//       }
//   ],
//   "favorite_data": [
//       {
//           "favorite": "단 맛",
//           "favorite_count": 21,
//           "user_sex": 0
//       },
//       {
//           "favorite": "단 맛",
//           "favorite_count": 25,
//           "user_sex": 1
//       },
//       {
//           "favorite": "매운 맛",
//           "favorite_count": 2,
//           "user_sex": 0
//       },
//       {
//           "favorite": "매운 맛",
//           "favorite_count": 10,
//           "user_sex": 1
//       },
//       {
//           "favorite": "신 맛",
//           "favorite_count": 8,
//           "user_sex": 0
//       },
//       {
//           "favorite": "신 맛",
//           "favorite_count": 14,
//           "user_sex": 1
//       },
//       {
//           "favorite": "쓴 맛",
//           "favorite_count": 8,
//           "user_sex": 0
//       },
//       {
//           "favorite": "쓴 맛",
//           "favorite_count": 2,
//           "user_sex": 1
//       },
//       {
//           "favorite": "짠 맛",
//           "favorite_count": 20,
//           "user_sex": 0
//       },
//       {
//           "favorite": "짠 맛",
//           "favorite_count": 14,
//           "user_sex": 1
//       }
//   ]
// }
  render() {
    const {man_point, woman_point, loading, man_count, woman_count, count ,radar_data, men_table_data, women_table_data, men_columns, women_columns, 
      chartRef} = this.state;
    return (
      
        <>
              <TextDiv style={{ textAlign:"center", fontSize: "20px" }}>性別レビューの情報です。</TextDiv>
              <InformDiv> 
                <ChartDiv>
                  {radar_data && (
                    <Radar data={radar_data} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                      }, 
                      legend: {
                        position:"bottom",
                      },
                    }} 
                      ref={this.chartReference}
                    />
                  )}
                  {/* {chartRef && (
                    // <button onClick={chartRef.toBase64Image()} >다운</button>

                  )} */}
                </ChartDiv>
                <ChartDiv>
                  <div id="Pie_Chart_With_Legend_review" style={{ width: "100%", height: "100%", margin:"0", padding:"0"}}></div>
                </ChartDiv>
                <TablesDiv>
                  <ManTableDiv>
                    <PointDiv>
                      <PointSpan>平均評価点数({man_point})</PointSpan>
                      <Rating name="read-only" precision={0.5} value={man_point} readOnly />
                    </PointDiv>
                    <Table columns={men_columns} dataSource={men_table_data} pagination={false} />
                  </ManTableDiv>
                  <WomanTableDiv>                    
                    <PointDiv>
                      <PointSpan>平均評価点数({woman_point})</PointSpan>
                      <Rating name="read-only" precision={0.5} value={woman_point} readOnly />  
                    </PointDiv>
                    <Table columns={women_columns} dataSource={women_table_data}  pagination={false} />
                  </WomanTableDiv>
                </TablesDiv>
              </InformDiv>
          
        </>
    );
  }
}

export default Pie_Chart_With_Legend_review;