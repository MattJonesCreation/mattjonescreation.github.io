import React from 'react';
import { Card } from 'semantic-ui-react';
import { Image, Transformation } from 'cloudinary-react';

const projects = [
    {
        header: "Daily Prayer",
        description: "Allows you to build a relationship with God through daily prayer.",
        href: "https://mattjonescreation.github.io/daily-prayer",
        meta: "March 20, 2019",
        image: (<Image cloudName="himattjones" publicId="daily-prayer-background_racrfy" secure="true" crop="scale" fetchFormat="auto"
                 alt="Allows you to build a relationship with God through daily prayer.">
                    <Transformation width="290" height="188" crop="scale" />
                </Image>)
    },
    {
        header: "Loan Calculator",
        description: "Simple loan calculator for calculating monthly payments and interest.",
        href: "https://mattjonescreation.github.io/financial-react", 
        meta: "March 19, 2019",
        image: (<Image cloudName="himattjones" publicId="loan-calculator-background" secure="true" crop="scale" fetchFormat="auto"
                    alt="Loan calculator site for calculating monthly payment and interest.">
                    <Transformation width="290" height="188" crop="scale" />
                </Image>)
    }, 
    {
        header: "Rustic Santa",
        description: "Personal website for the rustic santa.",
        href: "https://rusticsanta.github.io",
        meta: "June 12, 2020",
        image: (<Image cloudName="himattjones" publicId="rustic-santa-background_bk1zxu" secure="true" crop="scale" fetchFormat="auto"
                    alt="Personal website for the rustic santa.">
                    <Transformation width="290" height="188" crop="scale" />
                </Image>)
    }
];

const ProjectGroup = () => <Card.Group items={projects} />;

export default ProjectGroup; 