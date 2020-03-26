import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
    // console.log('------>', props.expenses[0]);
    
    return (
        <div>
            <h2>Here are all the expenses</h2>
            {props.expenses.length}
            {props.filters.text}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);