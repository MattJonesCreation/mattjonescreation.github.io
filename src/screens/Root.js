import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import ScreensHome from './Home/Home';
import ScreensProjects from './Projects/Projects';
import ScreensAbout from './About/About';
import ScreensContact from './Contact/Contact';

import GA from '../components/GoogleAnalytics';
import HomepageLayout from '../components/HomepageLayout';

const ScreensRoot = () => (
    <Router>
        {/* Initialize Google Analytics and managing document title, description, and meta */}
        { GA.init() && <GA.RouteTracker /> }
        <Helmet title="Matt Jones Portfolio" />

        <HomepageLayout> 
            {/* Main Content Routing Pages */}
            <Switch>
                <Route path="/" exact component={ScreensHome} />
                <Route path="/projects/" component={ScreensProjects} />
                <Route path="/about/" component={ScreensAbout} />
                <Route path="/contact/" component={ScreensContact} />
            </Switch>  
        </HomepageLayout>    
    </Router>
);

export default ScreensRoot;