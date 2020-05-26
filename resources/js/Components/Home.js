import React, {Component} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";
import Header from './Header';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
const LogoImage = styled.div`
    height: 100%;
    width: 50%;
    position: absolute;
    background-color:  #ff5122;
    background-size: cover;
    background-position: center center;
    background-image: url("./assets/logo.png");
`;
    
const List = styled.ul`
    display: felx;
    list-style: none; 
`;
const Item = styled.li`
    background-color: rgba(0,0,0,0);
    margin-left: 3%;
    margin-top: 1%;
    position: relative;
    left: 50%;
    font-size: 25px;
    font-weight: bold;
    &: hover {
        background-color: #ff5122;
    }
`;
const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: "",
            nickname: "",
            logged: false,
            onLogin: this.onLogin,
            onLogout: this.onLogout,
        }
    }

    // 로그인
    onLogin = (id, nickname) => {
        this.setState({
            id,
            nickname,
            logged: true
        });

        const provider = window.sessionStorage.getItem('provider');

    }
    // 로그아웃
    onLogout = () => {
        this.setState({
            logged: false
        });
        window.sessionStorage.clear();
        this.props.history.push('/');
    }

    componentDidMount() {
        const id = window.sessionStorage.getItem('id');
        const nickname = window.sessionStorage.getItem('nickname');
        if(id) {
            this.onLogin(id, nickname);
        } else {
            this.onLogout();
        }
        console.log(id);
    }
    
    render(){
        const { id, nickname, logged, onLogout } = this.state;
        return(
            <>
                <Header logged={logged} onLogout={onLogout} />
                <div>id: {id}, nickname: {nickname}</div>
            </>
        );
    }
}

export default withRouter(Home);

