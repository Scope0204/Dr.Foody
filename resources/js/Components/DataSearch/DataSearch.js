import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DataSearchContainer from './DataSearchContainer';

export default class extends Component {
    state = {
            searchTerm: "",
            pastTerm: "",
            result: null,
            loading: true,
            error: null
        }    
        // {
        //     food_id: 1,
        //     company_name: "",
        //     food_name: "",
        //     food_photo: "",
        //     point: 1,
        //     review_count: 1,
        //     search_count: 1,
        //     company: 1,
        //     country: "",
        //     sex: ""
        //     }
        // 받을 정보
        // food_id : 제품 번호
        // food_name : 제품이름
        // food_photo : 제품사진
        // point: 별점 평균
        // review_count: 리뷰 수
        // search_count: 조회 수
        // country: 선호 국가
        // sex: 선호 성별
    
     // 검색어를 입력 하였을 때 빈칸인지 확인하고 검색 실행
     handleSubmit = e => {
        e.preventDefault();
        console.log("submit");
        const { searchTerm, pastTerm } = this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
            this.setState({
                pastTerm: searchTerm
            });
        }
    };

    updateTerm = e => {
       const { target: { value } } = e;
       console.log(value);
        this.setState({
            searchTerm: value
        });

    };

    searchByTerm = async() => { 
    // async() =>{
        const { searchTerm } = this.state;
        this.setState({ loading: true});
        console.log('검색 작동');
        try {
            const {data : result} = 
                await axios.get(`http://3.34.97.97/api/searchFood/${searchTerm}`);
            this.setState({
                result
            });
            console.log(this.state.result);
        } catch {
            this.setState({ error: "Can't search"});
        } finally {
            this.setState({ loading: false});
        }
    }

    

    render(){
        const {searchTerm, pastTerm, result, loading, error } = this.state;
        console.log('render: ');
        console.log(result);

        return (
            <DataSearchContainer
                searchTerm={searchTerm}
                pastTerm={pastTerm}
                result={result}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
     
}