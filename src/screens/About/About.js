import React from 'react';
import Helmet from 'react-helmet';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import AboutImageCard from '../../components/About/ImageCard';
import UITable from '../../components/UI/Table';
import './About.css';

const experienceHeaders = ["Company", "Period", "Position"];
const experienceRows = [
    ["Software Design Solutions", "May 2016 - Present", "Software Engineer"],
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
                            I've been working as a Software Engineer for the past 3.5 years. Last year I was
                            promoted to team lead at Software Design Solutions. Although not much has changed, I still am 
                            actively working as a Full Stack Developer and pride myself on providing real-world solutions to complex technical problems.
                        </p>
                        <p>
                            I graduated from Xavier University with degrees in Mathematics and Computer Science. 
                            At Xavier University, I graduated as Magna Cum Laude while obtaining a 4.0 in Computer Science 
                            related classes and making Deans list every semester. I pride myself on always bringing out the 
                            best in my colleagues and I am able to do this because of the impact sports have had on my life.
                        </p>
                        <p>
                            Initially, I chose to go to Xavier University as an undecided major to play baseball at a 
                            collegiate level. After a couple of injuries I had to give up baseball but the lessons I 
                            learned have impacted my life immensely. I learned skills that emphasized teamwork, leadership, 
                            and time management. All of these help me to work well with others and being a great problem
                            solver. My senior year I was given The Richard J. Wehrmeyer Pi Mu Epsilon Award for
                            a Mathematics major exhibiting excellence in problem solving.
                        </p>
                    </Grid.Column>                                            
                </Grid.Row>
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