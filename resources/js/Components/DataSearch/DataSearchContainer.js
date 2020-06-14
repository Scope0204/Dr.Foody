import React, {Component} from 'react';
import styled from 'styled-components';
import DataProdList from './DataProdList';
import DataProduct from './DataProduct';
import Message from '../Message'


const Container = styled.div`
    position: relative;
    padding-top: 50px;
`;
// Search section
const SerachContainer = styled.div`
width: 50%;
position: absolute;
padding-top: 200px;
left: 70%;
transform: translate(-70%);
`;
const Form = styled.form`
width: 100%;
position: absolute;
`;
const Input = styled.input`
padding: 0.5em;
  margin: 0.5em;
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

const ResultContainer = styled.div`
    padding: 100px;
    padding-top: 200px;
    width: 100%;
    height: 100%;
`;
const LogoImage = styled.div`
left: 49%;
transform: translate(-49%);
    position: absolute;
    display: block;
    width: 200px;
    height: 190px;
    background-size: contain;
    background-image: url(${ props => props.bgUrl });
    background-position: center center;
`;

const DataSearchContainer = ({ logined, checkUser, onConfirm , handleSubmit, searchTerm, updateTerm, pastTerm, result, loading, error }) => (
        <Container>
            <LogoImage bgUrl = {require('../../assets/logo.jpg')} />
            <SerachContainer>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="Search Products" value= {searchTerm} onChange={updateTerm} ></Input>
                    <BtnSearch type="submit" value="검색">검색</BtnSearch>
                </Form>
            </SerachContainer>
            <ResultContainer>
                { loading ? (
                    <div>Please wating</div>
                ) : (
                    <>
                        {result && result.length > 0 && (
                            <DataProdList title={pastTerm}>
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
                                            logined = {logined}
                                            food_id ={c.food_id} review_count ={c.review_count}
                                            food_name={c.food_name} food_photo={c.food_photo} 
                                            rating={c.point}
                                            search_count ={c.search_count} country ={c.country}
                                            sex ={c.sex}
                                            checkUser = {checkUser}
                                            onConfirm = {onConfirm}
                                    />
                                ))}
                            </DataProdList>
                        )}
                        { error && <Message color="#e74c3c" text={error} />}
                    </>
                )}
            </ResultContainer>
            {/* { error && <Message color="#e74c3c" text={error} />} */}
            {/* { result.length === 0  && <Message text={`Nothing Found for ${pastTerm}`} color="#FFFF00" />} */}
        </Container>
);

export default DataSearchContainer;