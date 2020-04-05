import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    // console.log(props);
    return (
        <div>
            Editing expense with ID: {props.match.params.id}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => { 
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button 
                onClick={() => {
                    var id = props.expense.id;
                    // console.log(id);
                    props.dispatch(removeExpense({ id }));
                    props.history.push('/');
                }} 
            >
                Remove Expense
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};

export default connect(mapStateToProps)(EditExpensePage);