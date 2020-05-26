import React, {Component} from 'react';
import styled from 'styled-components';
import Rank from './Rank';
import Section from './ProdList';
import Product from './Product';
import Message from '../Message'


const Container = styled.div`
    margin-top:5%;
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
                        {/* 실제 사용 */}
                            {/* <Section title={result.food_name}>
                                { result.map( prod => (
                                    <Product
                                    // food_name, food_photo, rating, materiial
                                        food_name = {prod.food_name}
                                        food_photo ={prod.food_photo}  
                                        rating= {prod.food_rating} 
                                        materiial= {prod.materiial}
                                    />
                                ))}
                            </Section> */}

                            {/* 테스트 용 */}
                            <Section title={result.food_name}>
                                    <Product
                                    // food_name, food_photo, rating, materiial
                                        food_name = {result.food_name}
                                        food_photo ={result.food_photo}  
                                        rating= {result.food_rating} 
                                        material= {result.material}
                                    />
                            </Section>
                        { error && <Message color="#e74c3c" text={error} />}
                        {/* { result.length === 0  && <Message text={`Nothing Found for ${pastTerm}`} color="#FFFF00" />} */}
                </>
            )}
        </Container>
)

export default SerachPresenter;