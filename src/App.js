import React, { Component } from 'react';
import { Container, Grid, Form, Divider, Input, Label, Table, Button } from 'semantic-ui-react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            amount: '', 
            termYear: '', 
            termMonth: '',
            rateInt: '', 
            rateDecimal: ''
        };
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleReset = () => {
        this.setState({
            amount: '', 
            termYear: '', 
            termMonth: '',
            rateInt: '', 
            rateDecimal: ''
        });
    }

    calculateMonthlyPayment = () => {
        if (this.state.amount === '' || this.state.termYear === '' || this.state.termMonth === ''
        || this.state.rateInt === '' || this.state.rateDecimal === '') {
            return '';
        }

        let amount = parseInt(this.state.amount);
        let termYear = parseInt(this.state.termYear);
        let termMonth = parseInt(this.state.termMonth); 
        let rateInt = parseInt(this.state.rateInt);
        let rateDecimal = parseFloat('.' + this.state.rateDecimal);
        let rate = rateInt + rateDecimal;


        let retObj = {
            monthlyPayment : 0,
            monthlyInterest: 0,                
            totalInterest: 0, 
            totalAmount: 0 
        }; 

        let P = amount; 
        let i = (rate * .01 / 12);
        let n = (termYear * 12) + termMonth;

        let monthlyPayment = (P * (i / (1 - (Math.pow((1.0 + i), -1*n)))));

        retObj.monthlyPayment = monthlyPayment; 
        retObj.totalAmount = monthlyPayment * n;
        retObj.monthlyInterest = (retObj.totalAmount - amount) / n; 
        retObj.totalInterest = retObj.monthlyInterest * n;
        return retObj;
    }

    render() {
        let calculations = this.calculateMonthlyPayment(); 

        return (
            <Container className="App-container">
                <p>
                    Use our loan calculator to make estimating your monthly payment easy.
                    Just enter the loan amount, the term of the loan, and the interest rate.
                    See how much loan you can afford!
                </p>
                <Grid columns={1} stackable>
                    {/* Input Fields */}
                    <Grid.Column>
                        <Form>
                            {/* Loan Amount */}
                            <Form.Field inline>
                                <label>Loan Amount</label>
                                <Input labelPosition='right' type='text' placeholder='Amount...' name="amount" value={this.state.amount} onChange={this.handleChange}>
                                    <Label basic>$</Label>
                                    <input/>
                                    <Label>.00</Label>
                                </Input>
                            </Form.Field>
                            {/* Loan Term */}
                            <Form.Group inline className="App-group">
                                <label>Loan Term</label>
                                <Form.Field >
                                    <Input type='text' labelPosition='right' placeholder='Years...' name="termYear" value={this.state.termYear} onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Input labelPosition='right' type='text' placeholder='Months...'name="termMonth" value={this.state.termMonth} onChange={this.handleChange}>
                                        <Label className="App-label">Years</Label>
                                        <input/>
                                        <Label>Months</Label>
                                    </Input>
                                </Form.Field>
                            </Form.Group>
                            {/* Loan Rate */}
                            <Form.Group inline className="App-group">
                                <label>Loan Rate</label>
                                <Form.Field >
                                    <Input type='text' labelPosition='right' placeholder="Rate..." name="rateInt" value={this.state.rateInt} onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Input labelPosition='right' placeholder="Rate..." type='text' name="rateDecimal" value={this.state.rateDecimal} onChange={this.handleChange}>
                                        <Label className="App-label">.</Label>
                                        <input/>
                                        <Label>%</Label>
                                    </Input>
                                </Form.Field>
                            </Form.Group>                           
                        </Form>
                    </Grid.Column>
                    <Grid.Column>                        
                        <Divider />
                    </Grid.Column>
                    {/* Results Grid  */}
                    <Grid.Column>
                        <Table unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Monthly Payment</Table.HeaderCell>
                                    <Table.HeaderCell>Monthly Interest</Table.HeaderCell>
                                    <Table.HeaderCell>Interest Paid</Table.HeaderCell>
                                    <Table.HeaderCell>Amount Paid</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{calculations === '' ? "N/A" : calculations.monthlyPayment.toFixed(2) }</Table.Cell>
                                    <Table.Cell>{calculations === '' ? "N/A" : calculations.monthlyInterest.toFixed(2) }</Table.Cell>
                                    <Table.Cell>{calculations === '' ? "N/A" : calculations.totalInterest.toFixed(2) }</Table.Cell>
                                    <Table.Cell>{calculations === '' ? "N/A" : calculations.totalAmount.toFixed(2) }</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Button onClick={this.handleReset}>Clear Form</Button>
                    </Grid.Column>                
                </Grid>
            </Container>              
        );
    }
}

export default App;