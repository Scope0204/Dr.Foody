import React from 'react';
import ExportExcel from './ExportExcel';
import { Table } from 'antd';
import styled from 'styled-components';

const TitleDiv = styled.div`
padding-top: 5px;
padding-bottom: 5px;
margin-bottom: 50px;
text-align: center;
background: #dddddd;
font-weight: 600;
color: black;
font-size: 20px;

width: 95%;
`;
class ViewChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_data_result: this.props.all_data_result,
            source: this.props.source,
            //  search_condition = 
            //     previous_term,
            //     later_term,
            //     second_condition,
            //     third_condition,
            //     food_id,
            result: null,
            result_count: 0,
            excel_data: null,
            table_data: null,
            columns: [
                {
                    title: '年齢',
                    dataIndex: 'name',
                    width: 50,
                },
                {
                    title: '性別',
                    dataIndex: 'i1',
                    width: 50,
                },{
                    title: 'ユーザーの国家',
                    dataIndex: 'i2',
                    width: 150,
                },{
                    title: '検索日付',
                    dataIndex: 'i3',
                    width: 150,
                },{
                    title: '検索場所',
                    dataIndex: 'i4',
                    width: 150,
                },{
                    title: '注意すべき原材料',
                    dataIndex: 'i5',
                    width: 100,
                },{
                    title: '味のレベル(辛味)',
                    dataIndex: 'i6',
                    width: 100,
                },{
                    title: '味のレベル(苦味)',
                    dataIndex: 'i7',
                    width: 100,
                },{
                    title: '味のレベル(甘味)',
                    dataIndex: 'i8',
                    width: 100,
                },{
                    title: '味のレベル(酸味)',
                    dataIndex: 'i9',
                    width: 100,
                },{
                    title: '味のレベル(塩味)',
                    dataIndex: 'i10',
                    width: 100,
                }
                ],
        }
    }
    setExcelData = (all_data_result, source) => {
        console.log('엑셀 set 실행');
        // 조회 정보일 때
        //  0여자 1남자
        // 엑셀 데이터 생성
        let gender = '';
        if(source===1){
            let table_data = [];
            let excel_data =  [{
                columns: ["年齢", "性別", "ユーザーの国家", "検索日付", "注意すべき原材料", "検索場所", "味のレベル(辛味)", "味のレベル(苦味)","味のレベル(甘味)","味のレベル(酸味)","味のレベル(塩味)"],
                data: []
            }];
            for(let i=0; i < all_data_result.length; i++){
                let setting = [];
                if(all_data_result[i].gender){
                    gender = '男性';
                } else {
                    gender = '女性';
                }
                    table_data.push({
                        key: i,
                        name: all_data_result[i].age,
                        i1: gender,
                        i2: all_data_result[i].country,
                        i3: all_data_result[i].date,
                        i4: all_data_result[i].place,
                        i5: all_data_result[i].material,
                        i6: all_data_result[i].hot,
                        i7: all_data_result[i].bitter,
                        i8: all_data_result[i].sweet,
                        i9: all_data_result[i].sour,
                        i10: all_data_result[i].salty,
                    });
                    setting.push(all_data_result[i].age, gender, all_data_result[i].country
                        , all_data_result[i].date, all_data_result[i].material, all_data_result[i].place
                        , all_data_result[i].hot, all_data_result[i].bitter, all_data_result[i].sweet
                        , all_data_result[i].sour, all_data_result[i].salty
                        );
                    excel_data[0].data.push(setting);
            }
            this.setState({
                excel_data,
                table_data,
                result_count: all_data_result.length
            });
        }
        //  else if(source===0){
        //     let excel_data =  [{
        //         columns: ["年齢", "性別", "ユーザーの国家", "조회 일시", "기피재료",
        //                     "별점", "내용", "맛 리뷰 여부",
        //                     "선호 맛 레벨(매운맛)", "선호 맛 레벨(쓴맛)","선호 맛 레벨(단맛)",
        //                     "선호 맛 레벨(신맛)","선호 맛 레벨(짠맛)"],
        //         data: []
        //     }];
        //     for(let i=0; i < all_data_result.length; i++){
        //         let setting = [];
        //         let type = true;
        //         if(all_data_result[i].gender){
        //             gender = '남성';
        //         } else {
        //             gender = '여성';
        //         }
        //         if(all_data_result[i].type){
        //             type = true;
        //         } else {
        //             type = false;
        //         }
        //         setting.push(all_data_result[i].age, gender, all_data_result[i].country
        //             , all_data_result[i].date, all_data_result[i].material, all_data_result[i].point
        //             , all_data_result[i].content, type
        //             , all_data_result[i].hot, all_data_result[i].bitter, all_data_result[i].sweet
        //             , all_data_result[i].sour, all_data_result[i].salty
        //             );
        //         excel_data[0].data.push(setting);
        //     }
            
        // TABLE 정보 ============================================================================================
        // "年齢", "성별", "유저 국가", "조회 일시", "기피재료", "조회 장소", "선호 맛 레벨(매운맛)", "선호 맛 레벨(쓴맛)","선호 맛 레벨(단맛)","선호 맛 레벨(신맛)","선호 맛 레벨(짠맛)"
            
            
            // TABLE 정보 ============================================================================================
        }
        componentDidUpdate(preveProps){
            if(this.props.all_data_result !== preveProps.all_data_result){
                this.setExcelData(this.props.all_data_result, this.props.source);
            }
        }
        componentDidMount(){
            console.log("엑셀 컴디마 실행");
            const {all_data_result,source } = this.state;
            this.setExcelData(all_data_result,source);
        // country, age, sweet, bitter, date, gender, hot, material, place, salty, sour, 
    }
    
    render(){
        const { all_data_result, excel_data, columns, table_data, result_count} = this.state;
        console.log("all_data_result: ");
        console.log(all_data_result);
        return (
            <>
                <TitleDiv>
                    <div>{`${result_count}件の結果があります。`}</div>
                </TitleDiv>
                <ExportExcel dataSet = {excel_data} />
                <Table columns={columns} dataSource={table_data} pagination={{ pageSize: 50 }} scroll={{ y: 500 }} />
            </>
        );
    }
}

export default ViewChart;