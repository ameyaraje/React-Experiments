'use strict';

var app = {
    title: 'Indecision App',
    // subtitle: 'You are now controlled by a computer',
    options: ['One', 'Two']
};

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
        'ol',
        null,
        React.createElement('li', null),
        React.createElement('li', null)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
