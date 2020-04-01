import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
    
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} />
            <select value={props.filters.sortBy} onChange={(e) => {
                var filter = e.target.value;
                if (filter === 'amount') {
                    console.log('sorting by amount');
                    props.dispatch(sortByAmount());
                }
                if (filter === 'date') {
                    console.log('sorting by date');
                    props.dispatch(sortByDate());
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);