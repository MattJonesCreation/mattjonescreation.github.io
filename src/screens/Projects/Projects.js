import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Segment, Container, Header } from 'semantic-ui-react';

import ProjectGroup from '../../components/Project/Group';
import './Projects.css';

const ScreensProjects = () => (
    <Segment inverted vertical className="Projects-segment">
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Matt Jones Creations - Projects</title>
            <meta name="description" content="Contains all projects of Software Engineer Matt Jones." />
            <meta name="subject" content="Technology Portfolio" />
        </Helmet>
        <Container>
            <Grid inverted stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header inverted as="h1">Projects</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <ProjectGroup />
                    </Grid.Column>                                            
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default ScreensProjects;
