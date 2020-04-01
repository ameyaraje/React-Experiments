import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseItem = (props) => {
    // console.log(props);
    return (
        <div>
            <p>
                Name: {props.item.description}
            </p>
            <p>
                Amount: {props.item.amount}
            </p>
            <p>
                CreatedAt: {props.item.createdAt}
            </p>
            <button onClick={() => {
                var id = props.item.id 
                props.dispatch(removeExpense({id}));
            }} >
                Remove Expense
            </button>
        </div>
    );
};

export default connect()(ExpenseItem);