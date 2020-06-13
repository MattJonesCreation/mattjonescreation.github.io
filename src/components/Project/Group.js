import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import dailyPrayerImg from '../../images/daily-prayer-background.jpg';
import loanCalculatorImg from '../../images/loan-calculator-background.jpg';
import rusticSantaImg from '../../images/rustic-santa-background.jpg';

const projects = [
    {
        header: "Daily Prayer",
        description: "Allows you to build a relationship with God through daily prayer.",
        href: "https://himattjones.com/daily-prayer",
        meta: "March 20, 2019",
        image: <Image src={dailyPrayerImg} />
    },
    {
        header: "Loan Calculator",
        description: "Simple loan calculator for calculating monthly payments and interest.",
        href: "https://himattjones.com/financial-react", 
        meta: "March 19, 2019",
        image: <Image src={loanCalculatorImg} />
    }, 
    {
        header: "Rustic Santa",
        description: "Personal website for the rustic santa.",
        href: "https://rusticsanta.github.io",
        meta: "June 12, 2020",
        image: <Image src={rusticSantaImg} />
    }
];

const ProjectGroup = () => <Card.Group items={projects} />;

export default ProjectGroup; 