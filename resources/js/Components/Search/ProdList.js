import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Container = styled.div`
    :not(:last-child){
        margin-bottom: 50px;
    }
`;
const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
`;
const Grid = styled.div`
display: grid;
    margin-top: 25px;
    grid-template-rows: repeat(auto-fill, 200px); 
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 20px;
`;


const ProdList = ({ title, children}) => (
    <Container>
        <Title>'{title}'에 관한 검사 결과</Title>
        <Grid>{children}</Grid>
    </Container>
); 

ProdList.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProdList;