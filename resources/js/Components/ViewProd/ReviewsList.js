import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Container = styled.div`
    margin-top: 3%;
    width: 100%;
    height: 100%;
    :not(:last-child){
        margin-bottom: 50px;
    }
    transform: translate(-10%);
    background-color: white;
`;

const Grid = styled.div`
margin-left: -20%;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: auto auto;
    grid-gap: 50px 20%; 
    transform: translate(20%);
    `;
    // grid-template-rows: repeat(auto-fill, 200px); 
    // grid-template-columns: repeat(auto-fill, 300px);


const ReviewsList = ({children}) => (
    <Container>
        <Grid>{children}</Grid>
    </Container>
); 

export default ReviewsList;