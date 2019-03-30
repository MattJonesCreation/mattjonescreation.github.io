import React, { Component } from 'react';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomePage uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 * @TODO: Remove the inline styling everywhere
 */
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Segment inverted textAlign='center' style={{ padding: '1em 0em', minHeight: '500px' }} vertical>
                    <Container text>
                        <Header
                            as='h1'
                            content='Matt Jones'
                            inverted
                            style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '2em'
                            }}
                        />
                        <Header
                            as='h2'
                            content='Full-stack software engineer, voracious learner, and obsessive builder. Always striving to improve.'
                            inverted
                            style={{
                                fontSize: '1.7em',
                                fontWeight: 'normal',
                                marginTop: '1.5em'
                            }}
                        />    
                    </Container>
                </Segment>
                {/* Header Page */}
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Some Of My Latest Work
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Instead of focusing on content creation and hard work, we have learned how to master the
                            art of doing nothing by providing massive amounts of whitespace and generic content that
                            can seem massive, monolithic and worth your attention.
                        </p>
                        <Button as='a' size='large'>Read More</Button>
                    </Container>
                </Segment>
            </React.Fragment>
        );
    }
}

export default HomePage;