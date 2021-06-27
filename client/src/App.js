import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Logo from './component/header/logo';
import DataArea from './component/main/searchMovie/dataArea';
import Home from './component/main/mainHome/home';
import SearchBtn from './component/header/searchBtn';
import ProfileBtn from './component/header/profileBtn';
import PageNotFound from './component/header/pageNotFound';
import Profile from './component/main/profile/profile';
import './App.css'

function App() {
    return (
        <Router>
            <header>
                <Link to="/" style={{textDecoration : 'none'}}>
                    <Logo/>
                </Link>
                <Link to='/search'>
                    <SearchBtn/>
                </Link>
                <Link to='/profile'>
                    <ProfileBtn/>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/search' component={DataArea}/>
                    <Route path='/profile' component={Profile}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </main>
        </Router>
    )
}

export default App;
