import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Container = styled.div`
    
    width: 50%;
    height: 100%;
    :not(:last-child){
        margin-bottom: 50px;
    }
    
    margin: 4% 0 0 0;
    background-color: green;
`;

const Grid = styled.div`
    width: 50%;
    height: 100%;
    display: grid;
    margin-top: 35px;
    grid-gap: 20px; 
    `;
    // grid-template-rows: repeat(auto-fill, 200px); 
    // grid-template-columns: repeat(auto-fill, 300px);


const ProductList = ({children}) => (
    <Container>
        <Grid>{children}</Grid>
    </Container>
); 

ProductList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProductList;