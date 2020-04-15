import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused: calendarFocused
            };
        });
    };

    render() {
        return (
            <div>
                <p>Enter word to filter expense by here:</p>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    var filter = e.target.value;
                    if (filter === 'amount') {
                        console.log('sorting by amount');
                        this.props.dispatch(sortByAmount());
                    }
                    if (filter === 'date') {
                        console.log('sorting by date');
                        this.props.dispatch(sortByDate());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => (false)}
                    showClearDates={true}
                />
            </div>
        ); 
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);