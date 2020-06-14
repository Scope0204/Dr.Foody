import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 50%;
height: 100%;
    :not(:first-child){
        margin-bottom: 50px;
    }
`;
const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: red;
`;
const Grid = styled.div`
width: 50%;
height: 100%;
`;
// display: grid;  


const ReviewList = ({review_count, children}) => (
    <Container>
        <Title>총 {review_count}개의 리뷰가 있습니다.</Title>
        <Grid>{children}</Grid>
    </Container>
);

export default ReviewList; 