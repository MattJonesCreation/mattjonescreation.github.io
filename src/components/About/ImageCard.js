import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import profilePic from '../../images/profile.JPG';

const AboutImageCard = () => (
    <Card centered>
        <Image src={profilePic} />
        <Card.Content>
            <Card.Header>Matt</Card.Header>
            <Card.Meta>Developing Since 2012</Card.Meta>
            <Card.Description>Full-stack software engineer, voracious learner, and obsessive builder.</Card.Description>
        </Card.Content>
    </Card>
);

export default AboutImageCard;