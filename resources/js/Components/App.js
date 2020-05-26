import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, browserHistory } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
// import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
import Auth from './Auth/Auth';
import Search from './Search/Search';
import Product from './ViewProd/Product';
import DataSearch from './DataSearch/DataSearch';
import Data from './Data/Data';
import Store from './Store/store';

class App extends React.Component{
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
    }
    // 로그아웃
    onLogout = () => {
        this.setState({
            logged: false
        });
        window.sessionStorage.clear();
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
            <BrowserRouter>
                <>
                <Store.Provider value={this.state} >
                    <GlobalStyles />
                    {/* 라우터로 빼내서 home에 넣기? */}
                    <Header logged={logged} onLogout={onLogout} id={id}/>
                    <Switch>
                        <Route exact path ="/" component={Home} />
                        <Route path ="/search" component={Search} />
                        <Route path ="/search/:search_id" component={Search} />
                        <Route path ="/searchProduct/:food_code" component={Product} user_id={id} />
                        <Route path ="/login" component={Auth} />
                        <Route path ="/regist" component={Auth} />
                        <Route exact path ="/data" component={DataSearch} />
                        <Route path ="/data/:food_id" component={Data} />
                        {/* <Route path ="/sell/:id" component={sell} /> */}
                    </Switch>
                </Store.Provider>
                </>
            </BrowserRouter>
        );
    }
}

export default App;

