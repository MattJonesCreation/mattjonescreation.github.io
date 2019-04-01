import React from 'react';
import { Grid, Segment, Container, Header, Card } from 'semantic-ui-react';
import './ProjectsPage.css';

const projects = [
    {
        header: "Loan Calculator",
        description: "Simple loan calculator for calculating monthly payments and interest.",
        href: "https://himattjones.com/financial-react"
    },
    {
        header: "Daily Prayer",
        description: "Allows you to build a relationship with God through daily prayer.",
        href: "https://himattjones.com/daily-prayer"
    }
];

const ProjectGroups = () => <Card.Group items={projects} />;

const ProjectsPage = () => (
    <Segment inverted vertical className="Projects-segment">
        <Container>
            <Grid inverted stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header inverted as="h1">Projects</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} className="ProjectsPage-">
                        <ProjectGroups />
                    </Grid.Column>                                            
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default ProjectsPage;
