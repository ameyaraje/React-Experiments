import React from 'react';
import { shallow } from 'enzyme';

import ExpenseFom from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render empty ExpenseForm', () => {
    const wrapper = shallow(<ExpenseFom />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseFom expense={expenses[0]}/>);

    expect(wrapper).toMatchSnapshot();
});

test('should render error on ExpenseForm for submission with invalid data', () => {
    const wrapper = shallow(<ExpenseFom />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description when changed in ExpenseForm', () => {
    const value = 'NEW DESCRIPTION';
    const wrapper = shallow(<ExpenseFom />);

    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: value
        }
    });

    expect(wrapper.state('description')).toBe(value);
});

test('should set note when changed in ExpenseForm', () => {
    const value = 'NOTE FROM TEST';
    const wrapper = shallow(<ExpenseFom />);

    wrapper.find('textarea').simulate('change', {
        target: {
            value: value
        }
    });

    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid amount is entered in ExpenseForm', () => {
    const value = '12.56';
    const wrapper = shallow(<ExpenseFom />);

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: value
        }
    });

    expect(wrapper.state('amount')).toBe(value);
});

test('should set amount if invalid amount is entered in ExpenseForm', () => {
    const value = '46.444444444';
    const wrapper = shallow(<ExpenseFom />);

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: value
        }
    });

    expect(wrapper.state('amount')).toBe('');
});