import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Logo from './component/logo';
import DataArea from './component/dataArea';
import Home from './component/home';


function App() {
    return (
        <Router>
            <header>
                <Link to="/" style={{textDecoration : 'none'}}>
                    <Logo/>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/search' component={DataArea}/>
                </Switch>
                <Link to='/search'>
                    <button>검색하러가기</button>
                    </Link>
            </main>
        </Router>
    )
}

export default App;
