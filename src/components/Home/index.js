import React from "react";
import {Container, Typography} from '@material-ui/core';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>홈</h1>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}}/>
                </Container>
            </div>
        )
    }
}

export default Home;
