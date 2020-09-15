import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


// const Container = styled.div`
// width: 60%;
// padding-top: 20px;
//     :not(:last-child){
//         margin-bottom: 50px;
//     }
// `;
// const Title = styled.span`
//     font-size: 16px;
//     font-weight: 600;
// `;
// const Grid = styled.div`
//     margin-top: 25px;
//     display: grid;
//     grid-template-rows: repeat(auto-fill, 200px); 
//     grid-template-columns: repeat(auto-fill, 300px);
//     grid-gap: 20px;
// `;

const Container = styled.div`
    
    width: 100%;
    height: 100%;
    :not(:last-child){
        margin-bottom: 50px;
    }
    
    margin: 1% 0 0 0;
    background-color: white;
`;

const Grid = styled.div`
width: 33%;
height: 100%;
display: grid;
grid-template-columns: auto auto;
    margin-top: 35px;
    grid-gap: 20px;
    left: 50%;
    `;
    // transform: translate(15%);

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