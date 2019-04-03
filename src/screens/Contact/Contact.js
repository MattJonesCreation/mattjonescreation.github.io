import React from 'react';
import Helmet from 'react-helmet';
import { Segment, Container, Grid, Header } from 'semantic-ui-react';
import './Contact.css';

const ScreensContact = () => (
    <Segment inverted vertical className="Contact-segment">
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Matt Jones Creations - Contact</title>
            <meta name="description" content="Contact Page for Software Engineer Matt Jones." />
            <meta name="subject" content="Contact" />
        </Helmet>
        <Container>
            <Grid inverted stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header inverted as="h1">Contact</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} className="Contact-contactinfo">
                        <blockquote>
                            <p>
                                Feel free to reach out with any questions or inquiries, technical or otherwise.
                                Please do not send spam or try to advertise any services to me.
                            </p>
                        </blockquote>
                        <Header inverted as="h3">Email</Header>
                        <p><a href="mailto:jonesm33@xavier.edu">jonesm33@xavier.edu</a></p>
                        <Header inverted as="h3">LinkedIn</Header>
                        <p><a href="https://www.linkedin.com/in/MattJonesCreation/">linkedin.com/in/MattJonesCreation</a></p>
                        <Header inverted as="h3">Github</Header>
                        <p><a href="https://github.com/MattJonesCreation">github.com/MattJonesCreation</a></p>
                    </Grid.Column>                                            
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default ScreensContact;