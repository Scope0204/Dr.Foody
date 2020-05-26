import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

//Rank section
const RankContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 100px;
`;
const RankCardSt = styled.div`
    width: 30%;
    height: 100%;
    flex:1;
    margin-left: 10px;
    border: 2px solid #FFDAAB;
    text-align: center center;
`;
const RankListSt = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;
    display: block;
`;
const RankTitle = styled.h1`
    font-size: bold;
`;
const RankItem = styled.li`
    font-size: 20px;
`;
const items = [
    {   category: '성별',
        prod: ['불닭볶음면', '레모나', '연근', '오뎅', '떡볶이']
    },
    {   category: '나라',
        prod: ['불닭볶음면', '레모나', '연근', '오뎅', '떡볶이']
    },
    {   category: '기간',
        prod: ['불닭볶음면', '레모나', '연근', '오뎅', '떡볶이']
    }
];
class RankCard extends Component {
    render(){
        const {prod} = this.props.prod
        // console.log(prod);
        return (
            <RankCardSt>
                <RankTitle>{this.props.category}</RankTitle>
                {this.props.prod.map((p, i)=>{
                    return <RnakList key={i} prod={p} />
                })}
            </RankCardSt>
        );
    }
}
class RnakList extends Component {
    render(){
        return (
            <Link to={`/searchProduct/${this.props.prod}`}>
                <RankListSt>
                    <RankItem key={this.key}>{this.props.prod}</RankItem>
                </RankListSt>
            </Link>
        );
    }
}
class Rank extends Component {
 render(){
    return (
            <RankContainer>
                {items.map((i, index) => {
                    return <RankCard key={index} category={i.category} prod={i.prod} />
                })}
            </RankContainer>
    );
    }
}

export default Rank;
