import React, {Component} from 'react';
import styled from 'styled-components';
import Rank from './Rank';
import ProdList from './ProdList';
import Product from './Product';
import Message from '../Message'
import Store from '../Store/store';

const Container = styled.div`
    position: relative;
    padding-top: 5%;
    `;
    // padding-top: 7%;
// Search section
const SerachContainer = styled.div`
width: 50%;
position: relative;
padding-top: 200px;
left: 71%;
transform: translate(-70%);
`;
const Form = styled.form`
    width: 100%;
    position: relative;
`;
const Input = styled.input`
padding: 0.5em;
  margin: 0.5em;
    all: unset;
    font-size: 22px;
    width: 48%;
    border: 1.8px solid #ff5122;
    padding: 5px;
    margin-top: 20px; 
    color:black;
`;
const BtnSearch = styled.button`
    
    background-color:  #ff5122;
    border: 3px solid  #ff5122;
    color: white;
    font-size: 22px;
    padding: 9px;
    padding-top: 10px;
    &: hover{
        opacity: 0.6;
    }
`;

const resultContainer = styled.div`
    width: 100%;

`;
const LogoImage = styled.div`
left: 51%;
transform: translate(-50%);
    position: absolute;
    display: block;
    width: 232px;
    height: 180px;
    background-size: contain;
    background-image: url(${ props => props.bgUrl });
    background-position: center center;
`;

const SerachPresenter = ({ handleSubmit, searchTerm, updateTerm, pastTerm, result, loading, error }) => (
            <Container>
                    <LogoImage bgUrl = {require('../../assets/logo.jpg')} />
                    <SerachContainer>
                        <Form onSubmit={handleSubmit}>
                            <Input placeholder="食品名を入力してください。" value= {searchTerm} onChange={updateTerm} ></Input>
                            <BtnSearch type="submit" value="검색">検索</BtnSearch>
                        </Form>
                    </SerachContainer>
                    { loading ? (
                        <Rank />
                    ) : (
                        <>
                            
                            {result && result.length > 0 && (
                                <ProdList title={pastTerm}>
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
                            {/* { error && <Message color="#e74c3c" text={error} />} */}
                            {/* { result.length === 0  && <Message text={`Nothing Found for ${pastTerm}`} color="#FFFF00" />} */}
                        </>
                    )}
                </Container>
)

export default SerachPresenter;