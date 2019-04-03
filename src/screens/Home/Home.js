import React, { Component } from 'react';
import { Button, Container, Header, Segment } from 'semantic-ui-react';
import './Home.css';

/* eslint-disable react/no-multi-comp */
/* Heads up! ScreensHome uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 * @TODO: Remove the inline styling everywhere
 */
class ScreensHome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Segment inverted textAlign='center' className="Home-segment" vertical>
                    <Container text>
                        <Header
                            as='h1'
                            content='Matt Jones'
                            inverted
                            className="Home-h1"
                        />
                        <Header
                            as='h2'
                            content='Full-stack software engineer, voracious learner, and obsessive builder. Always striving to improve.'
                            inverted
                            className="Home-h2"
                        />    
                    </Container>
                </Segment>
                {/* Header Page */}
                <Segment className="Home-segment" vertical>
                    <Container text>
                        <Header as='h3' className="Home-h3">
                            Some Of My Latest Work
                        </Header>
                        <p>
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

export default ScreensHome;