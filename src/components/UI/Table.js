import React from 'react';
import { Table, Header } from 'semantic-ui-react';

const UITable = (props) => (
    <div>
        <Header inverted as="h3">{props.title}</Header>
        <Table inverted unstackable>
            <Table.Header>
                <Table.Row>
                    {props.headers.map(header => {
                        return (
                            <Table.HeaderCell>{header}</Table.HeaderCell>
                        );
                    })}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.rows.map(row => {
                    return (
                        <Table.Row>
                            {row.map(r => {
                                return (
                                    <Table.Cell>{r}</Table.Cell>
                                );
                            })}
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>          
    </div>
);

export default UITable;