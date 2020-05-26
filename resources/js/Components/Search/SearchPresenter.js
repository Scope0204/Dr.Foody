import React, {Component} from 'react';
import styled from 'styled-components';
import Rank from './Rank';
import ProdList from './ProdList';
import Product from './Product';
import Message from '../Message'
import Store from '../Store/store';

const Container = styled.div`
    margin-top:50px;
    position: relative;
`;
// Search section
const SerachContainer = styled.div`
    width: 50%;
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
    font-size: 21px;
    border-top-right-radius: 5px 5px; 
    border-bottom-right-radius: 5px 5px; 
    &: hover{
        opacity: 0.6;
    }
`;

const resultContainer = styled.div`
    width: 100%;

`;

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
const SerachPresenter = ({ handleSubmit, searchTerm, updateTerm, pastTerm, result, loading, error }) => (
            <Container>
                    <SerachContainer>
                        <Form onSubmit={handleSubmit}>
                            <Input placeholder="Search Products" value= {searchTerm} onChange={updateTerm} ></Input>
                            <BtnSearch type="submit" value="검색">검색</BtnSearch>
                        </Form>
                    </SerachContainer>
                    { loading ? (
                        <Rank />
                    ) : (
                        <>
                            
                            {result && result.length > 0 && (
                                <ProdList title={searchTerm}>
                                    { result.map( (c, index) => (
                                        <Product
                                            key = {index}
                                            food_code = {c.food_id}
                                            food_name = {c.food_name}
                                            food_photo ={c.food_photo}  
                                            rating= {c.food_rating} 
                                            material= {c.material}
                                        />
                                    ))}
                                </ProdList>
                            )}
                            { error && <Message color="#e74c3c" text={error} />}
                            {/* { result.length === 0  && <Message text={`Nothing Found for ${pastTerm}`} color="#FFFF00" />} */}
                        </>
                    )}
                </Container>
)

export default SerachPresenter;