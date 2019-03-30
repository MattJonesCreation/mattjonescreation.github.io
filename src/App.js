import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './HomepageLayout';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }

    render() {
        return (
            <Router> 
                <div>
                    <HomepageLayout /> 
                </div>
            </Router>                 
        );
    }
}

export default App;