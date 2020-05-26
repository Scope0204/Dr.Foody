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
import Data from './Data/Data';

class App extends React.Component{
    

    render(){
        return(
            <BrowserRouter>
                <>
                    <GlobalStyles />
                    {/* 라우터로 빼내서 home에 넣기? */}
                    <Switch>
                        <Route exact path ="/" component={Home} />
                        <Route path ="/search" component={Search} />
                        <Route path ="/search/:search_id" component={Search} />
                        <Route path ="/login" component={Auth} />
                        <Route path ="/regist" component={Auth} />
                        <Route path ="/searchProduct/:id" component={Product} />
                        <Route path ="/searchProduct" component={Product} />
                        <Route path ="/data" component={Data} />
                        {/* <Route path ="/sell/:id" component={sell} /> */}
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;

