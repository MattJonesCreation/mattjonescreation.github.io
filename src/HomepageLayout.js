import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, Route } from "react-router-dom";
import { Button, Container, Grid, Header, Icon, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import logo from './images/favicons/favicon.ico';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined';
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

class Pages extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu.Item as={Nav} to="/" name="home" position='right'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as={Nav} to="/projects" name="projects" >
                    <Icon name='briefcase' />
                    Projects & Guides
                </Menu.Item>
                <Menu.Item as={Nav} to="/about" name="about" >
                    <Icon name='info' />
                    About
                </Menu.Item>
                <Menu.Item as={Nav} to="/contact" name="contact">
                    <Icon name='address book' />
                    Contact
                </Menu.Item>
            </React.Fragment>
        );
    } 
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <React.Fragment>
        <Segment inverted textAlign='center' style={{ padding: '1em 0em', minHeight: '500px' }} vertical>
    <Container text>
        <Header
            as='h1'
            content='Matt Jones'
            inverted
            style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1em' : '2em'
            }}
        />
        <Header
            as='h2'
            content='Full-stack software engineer, voracious learner, and obsessive builder. Always striving to improve.'
            inverted
            style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em'
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
  
HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};
  
/* Heads up!
* Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
* It can be more complicated, but you can create really flexible markup.
*/
class DesktopContainer extends Component {   
    render() {
        const { children } = this.props;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility>
                    <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
                        <Menu inverted={true} secondary={true} size='large'>
                            <Container>
                                <Menu.Item as={Link} to="/" name='home'><img src={logo} alt="logo"/></Menu.Item>
                                <Pages />
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility> 
                {children}
            </Responsive>
        );
    }
}
  
DesktopContainer.propTypes = {
    children: PropTypes.node,
};
  
class MobileContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            sidebarOpened: false 
        }; 
    }

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleSidebarShow = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;

        return (
            <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar as={Menu} animation='overlay' direction='right' inverted onHide={this.handleSidebarHide} vertical visible={sidebarOpened}>
                    <Pages />
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
                        <Container>
                        <Menu inverted={true} secondary={true} size='large'>
                            <Menu.Item as={Link} to="/" name='home'><img src={logo} alt="logo"/></Menu.Item>
                            <Menu.Item position='right' onClick={this.handleSidebarShow}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                        </Menu>
                        </Container>
                    </Segment>
                    {children}
                </Sidebar.Pusher>
            </Responsive>
        );
    }
}
  
MobileContainer.propTypes = {
    children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);
  
ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

function Projects() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

const HomepageLayout = () => (
    <ResponsiveContainer>
        {/* Routes */}
        <Route path="/" exact component={HomepageHeading} />
        <Route path="/projects/" component={Projects} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Users} />

        {/* Footer */}
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
        
    </ResponsiveContainer>
);

export default HomepageLayout;