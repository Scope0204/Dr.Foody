import React from 'react';
import ExportExcel from './ExportExcel';


class Chart extends React.Component{
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
            excel_data: null,
        }
    }

    setExcelData = (all_data_result, source) => {
        console.log('엑셀 set 실행');
        // 조회 정보일 때
        //  0여자 1남자
        let gender = '';
        if(source===1){
            let excel_data =  [{
                columns: ["연령", "성별", "유저 국가", "조회 일시", "기피재료", "조회 장소", "선호 맛 레벨(매운맛)", "선호 맛 레벨(쓴맛)","선호 맛 레벨(단맛)","선호 맛 레벨(신맛)","선호 맛 레벨(짠맛)"],
                data: []
            }];
            for(let i=0; i < all_data_result.length; i++){
                    let setting = [];
                    if(all_data_result[i].gender){
                        gender = '남성';
                    } else {
                        gender = '여성';
                    }
                    setting.push(all_data_result[i].age, gender, all_data_result[i].country
                        , all_data_result[i].date, all_data_result[i].material, all_data_result[i].place
                        , all_data_result[i].hot, all_data_result[i].bitter, all_data_result[i].sweet
                        , all_data_result[i].sour, all_data_result[i].salty
                        );
                    excel_data[0].data.push(setting);
            }
            this.setState({
                excel_data
            });
        } else if(source===0){
            let excel_data =  [{
                columns: ["연령", "성별", "유저 국가", "조회 일시", "기피재료",
                            "별점", "내용", "맛 리뷰 여부",
                            "선호 맛 레벨(매운맛)", "선호 맛 레벨(쓴맛)","선호 맛 레벨(단맛)",
                            "선호 맛 레벨(신맛)","선호 맛 레벨(짠맛)"],
                data: []
            }];
            for(let i=0; i < all_data_result.length; i++){
                let setting = [];
                let type = true;
                if(all_data_result[i].gender){
                    gender = '남성';
                } else {
                    gender = '여성';
                }
                if(all_data_result[i].type){
                    type = true;
                } else {
                    type = false;
                }
                setting.push(all_data_result[i].age, gender, all_data_result[i].country
                    , all_data_result[i].date, all_data_result[i].material, all_data_result[i].point
                    , all_data_result[i].content, type
                    , all_data_result[i].hot, all_data_result[i].bitter, all_data_result[i].sweet
                    , all_data_result[i].sour, all_data_result[i].salty
                    );
                excel_data[0].data.push(setting);
            }
            this.setState({
                excel_data
            });
        }
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
        const { all_data_result, excel_data} = this.state;
        console.log("all_data_result: ");
        console.log(all_data_result);
        return (
            <ExportExcel dataSet = {excel_data} />
        );
    }
}

export default Chart;