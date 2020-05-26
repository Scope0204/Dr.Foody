import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import Login from './Login';
import Register from './Register';
class Auth extends Component {
    // 페이지에 진입 할 때 헤더를 비활성화
    // componentWillMount() {
    //     this.props.BaseActions.setHeaderVisibility(false);
    // }

    // 페이지에서 벗어 날 때 다시 활성화
    // componentWillUnmount() {
    //     this.props.BaseActions.setHeaderVisibility(true);
    // }

    render() {
        return (
            <AuthWrapper>
                <Route path="/login" component={Login}/>
                <Route path="/regist" component={Register}/>
            </AuthWrapper>
        );
    }
}

export default Auth;