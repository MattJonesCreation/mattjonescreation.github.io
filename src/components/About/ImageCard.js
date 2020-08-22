import React from 'react';
import { Card } from 'semantic-ui-react';
import { Image, Transformation } from 'cloudinary-react';

const AboutImageCard = () => (
    <Card centered>
        <Image cloudName="himattjones" publicId="profile_zobfhv.webp" secure="true" crop="scale" alt="Personal profile photo for Matt Jones.">
                <Transformation width="290" crop="scale" />
        </Image>
        <Card.Content>
            <Card.Header>Matt</Card.Header>
            <Card.Meta>Developing Since 2012</Card.Meta>
            <Card.Description>Full-stack software engineer, voracious learner, and obsessive builder.</Card.Description>
        </Card.Content>
    </Card>
);

export default AboutImageCard;