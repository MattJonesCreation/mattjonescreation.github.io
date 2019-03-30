import React from 'react';
import { Table } from 'semantic-ui-react';

const AboutTable = () => (
    <Table inverted unstackable>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Company</Table.HeaderCell>
                <Table.HeaderCell>Time Period</Table.HeaderCell>
                <Table.HeaderCell>Job Title</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>Software Design Solutions</Table.Cell>
                <Table.Cell>May 2016 - Present</Table.Cell>
                <Table.Cell>Software Engineer</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Epsilon</Table.Cell>
                <Table.Cell>July 2015 - May 2016</Table.Cell>
                <Table.Cell>Software Developer</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);

export default AboutTable;