import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // console.log(expense);
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h2>
                    From the Add Expense Page
                </h2>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        
    )};
}


const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => {
            return dispatch(addExpense(expense));
        } 
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);