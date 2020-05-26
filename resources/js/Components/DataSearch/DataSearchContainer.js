import React, {Component} from 'react';
import styled from 'styled-components';
import DataProdList from './DataProdList';
import DataProduct from './DataProduct';
import Message from '../Message'


const Container = styled.div`
    margin-top:5%;
    position: relative;
`;
// Search section
const SerachContainer = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
`;
const Form = styled.form`
    width: 100%;
    position: absolute;
    left: 70%;
`;
const Input = styled.input`
    all: unset;
    font-size: 20px;
    width: 50%;
    border: 2px solid #ff5122;
    border-top-left-radius: 5px 5px; 
    border-bottom-left-radius: 5px 5px; 
`;
const BtnSearch = styled.button`
    background-color:  #ff5122;
    border: 0px solid  #ff5122;
    color: white;
    font-size: 22px;
    border-top-right-radius: 5px 5px; 
    border-bottom-right-radius: 5px 5px; 
    &: hover{
        opacity: 0.6;
    }
`;

const resultContainer = styled.div`

`;

// 받을 정보
// food_id : 제품 번호
// food_name : 제품이름
// food_photo : 제품사진
// point: 별점 평균
// review_count: 리뷰 수
// search_count: 조회 수
// country: 선호 국가
// sex: 선호 성별
const test_result = [
    {
        food_name : '신라면', 
        food_photo: null, 
        rating: 10, 
        materiial : '없엉'
    },
    {
        food_name : '삼양', 
        food_photo: null, 
        rating: 5, 
        materiial : 'ㄹㄴㅁㅇㄹㄴㅁㅇㄹ'
    },
    {
        food_name : '조준경', 
        food_photo: null, 
        rating: 9, 
        materiial : 'whwnsrud'
    }
];

const DataSearchContainer = ({ handleSubmit, searchTerm, updateTerm, pastTerm, result, loading, error }) => (
        <Container>
            <SerachContainer>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="Search Products" value= {searchTerm} onChange={updateTerm} ></Input>
                    <BtnSearch type="submit" value="검색">검색</BtnSearch>
                </Form>
            </SerachContainer>
            { loading ? (
                <div>Please wating</div>
            ) : (
                <>
                    {result && result.length > 0 && (
                        <DataProdList title={searchTerm}>
                            {result.map((c, index) => (
                                // food_id : 제품 번호
                                // food_name : 제품이름
                                // food_photo : 제품사진
                                // point: 별점 평균
                                // review_count: 리뷰 수
                                // search_count: 조회 수
                                // country: 선호 국가
                                // sex: 선호 성별
                                <DataProduct key={index}
                                        food_id ={c.food_id} review_count ={c.review_count}
                                        food_name={c.food_name} food_photo={c.food_photo} 
                                        rating={c.point}
                                        search_count ={c.search_count} country ={c.country}
                                        sex ={c.sex}
                                />
                            ))}
                        </DataProdList>
                    )}
                    { error && <Message color="#e74c3c" text={error} />}
                </>
            )}
            {/* { error && <Message color="#e74c3c" text={error} />} */}
            {/* { result.length === 0  && <Message text={`Nothing Found for ${pastTerm}`} color="#FFFF00" />} */}
        </Container>
);

export default DataSearchContainer;