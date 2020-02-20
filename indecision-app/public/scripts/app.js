'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'You are now controlled by a computer',
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

var deleteOptions = function deleteOptions() {
    app.options = [];
    renderIndecisionApp();
};

var appRoot = document.getElementById('app');

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        app.options.length > 0 ? "Here are your options" : "No options specified",
        React.createElement(
            'p',
            null,
            'Number of options: ',
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: deleteOptions },
            'Remove Options'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item One'
            ),
            React.createElement(
                'li',
                null,
                'Item Two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
