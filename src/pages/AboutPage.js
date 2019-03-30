import React, { Component } from 'react';
import { Container, Header, Segment, Grid, Image } from 'semantic-ui-react';
import mattspond from './../images/mattspond.png';
import './AboutPage.css';
import AboutTable from '../AboutTable';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container className="AboutPage-container">
                    <Grid inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header inverted as="h1" className="">About</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Image src={mattspond} />     
                            </Grid.Column>   
                            <Grid.Column width={8} className="AboutPage-intro">
                                <p>
                                    I've been working as a Software Engineer for the past 3.5 years. Last year I was
                                    promoted to team lead at Software Design Solutions. Although not much has changed, I still am 
                                    actively working as a Full Stack Developer and pride myself on providing real-world solutions to complex technical problems.
                                </p>
                                <p>
                                    I've been working as a Software Engineer for the past 3.5 years. Last year I was
                                    promoted to team lead at Software Design Solutions. Although not much has changed, I still am 
                                    actively working as a Full Stack Developer and pride myself on providing real-world solutions to complex technical problems.
                                </p>
                                <p>
                                    I've been working as a Software Engineer for the past 3.5 years. Last year I was
                                    promoted to team lead at Software Design Solutions. Although not much has changed, I still am 
                                    actively working as a Full Stack Developer and pride myself on providing real-world solutions to complex technical problems.
                                </p>
                            </Grid.Column>                                            
                        </Grid.Row>
                    </Grid>
                    <AboutTable />
                </Container>
            </Segment>
        );
    }
}

export default AboutPage;