import React from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import AboutImageCard from '../../components/About/ImageCard';
import AboutTable from '../../components/About/Table';
import './About.css';

const ScreensAbout = () => (
    <Segment inverted vertical className="About-segment">
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
            </Grid>
            <AboutTable />
        </Container>
    </Segment>
);

export default ScreensAbout;