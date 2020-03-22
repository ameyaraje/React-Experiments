import { createStore, combineReducers } from 'redux';
import { v1 as uuidv1 } from 'uuid';

/* 
    Actions to be completed
    add expense
    remove expense
    edit expense
    set text filter
    sort by date
    sort by amount
    set start date
    set end date
*/

// define reducer default states
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


// actions
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv1(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    };
};

const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    };
};

// create reducers
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });

        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


// create store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    console.log(store.getState());
});

const exp1 = store.dispatch(addExpense({
    description: 'Test',
    note: 'testest',
    amount: 1400
}));

const exp2 = store.dispatch(addExpense({
    description: 'Test2',
    note: 'testesttestestest',
    amount: 500
}));

store.dispatch(removeExpense({
    id: exp1.expense.id
}));



const demoData = {
    expenses: [{
        id: 'dfjnfg',
        description: 'Kings Pub',
        note: 'drink with friends',
        amount: 1340,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};