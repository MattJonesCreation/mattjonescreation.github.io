import React from 'react';
import Helmet from 'react-helmet';
import { Container, Header, Segment, Grid, Divider } from 'semantic-ui-react';
import AboutImageCard from '../../components/About/ImageCard';
import UITable from '../../components/UI/Table';
import './About.css';

const experienceHeaders = ["Company", "Period", "Position"];
const experienceRows = [
    ["SessionM, A Mastercard Company", "April 2020 - now", "Software Engineer II"],
    ["Software Design Solutions", "May 2016 - April 2020", "Software Engineer"],
    ["Epsilon", "July 2015 - May 2016", "Software Developer"]
];
const educationHeaders = ["Degree", "University"];
const educationRows = [
    ["Mathematics and Computer Science (B.S.)", "Xavier University"]
];
const skillsHeaders = [];
const skillsRows = [
    ["C#"], ["SQL / Oracle"], ["HTML / CSS / JS"], ["ASP.NET / Web API 2 / MVC"], ["Windows Forms"], ["WPF / XAML"], ["React / NodeJS"], ["Agile / JIRA"]
];

const ScreensAbout = () => (
    <Segment inverted vertical className="About-segment">
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Matt Jones Creations - About</title>
            <meta name="description" content="About Page for Software Engineer Matt Jones." />
            <meta name="subject" content="About" />
        </Helmet>
        <Container>
            <Grid inverted stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header inverted as="h1">About</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <AboutImageCard />     
                    </Grid.Column>   
                    <Grid.Column width={8} className="About-intro">
                        <p>
                        I've been working as a Software Engineer for the past 5 years. I spent 4 of those years as a consultant 
                        for Software Design Solutions where I took on a multitude of clients solving complex IoT problems. 
                        Recently, I started a role as a Software Engineer at SessionM, a Mastercard company.
                        </p>
                        <p>
                        I did my undergraduate work at Xavier University, where I double majored in Mathematics and Computer Science. 
                        At Xavier University, I graduated as Magna Cum Laude while obtaining a 4.0 in Computer Science related majors 
                        and making Deans list every semester. I pride myself on always bringing out the best in my colleagues and 
                        I am able to do this because of the impact sports have had on my life.
                        </p>
                    </Grid.Column>                                            
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <Grid.Column width={6}>
                        <UITable headers={experienceHeaders} rows={experienceRows} title={"Experience"} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <UITable headers={educationHeaders} rows={educationRows} title={"Education"} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <UITable headers={skillsHeaders} rows={skillsRows} title={"Technical Skills"} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>         
        </Container>
    </Segment>
);

export default ScreensAbout;