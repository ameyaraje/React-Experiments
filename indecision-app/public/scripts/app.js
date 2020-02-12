'use strict';

// Type 1: Simplest way, i.e. add HTML tags to a template and render them out
var template1 = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'This is JSX'
    )
);

// Method 2: Create variables and add their values inside a template to render
var username = 'Frank Lampard';
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        username
    ),
    React.createElement(
        'p',
        null,
        'Position: Midfielder'
    ),
    React.createElement(
        'p',
        null,
        'Status: Legend'
    )
);

// Method 3:  Create objects and refer their attributes/values inside templates to render
var user = {
    name: 'Steven Gerrard',
    position: 'Midfielder',
    status: 'Legend'
};
var template3 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Position: ',
        user.position
    ),
    React.createElement(
        'p',
        null,
        'Status: ',
        user.status
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);
