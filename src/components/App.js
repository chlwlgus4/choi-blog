import React from 'react';
import '../App.css';
import {Route,Link, Switch} from 'react-router-dom';

import Home from '../components/Home'
import Post from '../components/Post'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function App() {
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

   const sendPage = (page) => {
        console.log(page)
    }

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="HOME" {...a11yProps(0)} onClick={() => sendPage(0)}/>
                    <Tab label="POST" {...a11yProps(1)} onClick={() => sendPage(1)}/>
                    <Tab label="..." {...a11yProps(2)} onClick={() => sendPage(2)}/>
                </Tabs>
            </AppBar>
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
