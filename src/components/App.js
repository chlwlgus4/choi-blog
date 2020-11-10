import React from 'react';
import '../App.css';
import {Route,Link, Switch} from 'react-router-dom';
import Home from '../components/Home'
import Post from '../components/Post'

function App() {
    return (
        <div>
          <ul>
            <li><Link to={'/'}>홈</Link></li>
            <li><Link to={'/post'}>게시판</Link></li>
          </ul>
            <Switch>
                <Route path={'/'} component={Home} exact={true}/>
                <Route path={'/post'} component={Post}/>
            </Switch>
        </div>
    );
}

export default App;
