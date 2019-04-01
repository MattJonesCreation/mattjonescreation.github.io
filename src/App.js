import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './HomepageLayout';
import { BrowserRouter as Router } from "react-router-dom";
import Helmet from 'react-helmet';
import GA from './GoogleAnalytics';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }

    render() {
        return (
            <Router> 
                { GA.init() && <GA.RouteTracker /> }
                <div>
                    <Helmet title="Matt Jones Portfolio" />
                    <HomepageLayout /> 
                </div>
            </Router>                 
        );
    }
}

export default App;