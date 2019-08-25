'use strict';

console.log("app is running");

var toggle = false;

var toggleDetails = function toggleDetails() {
    toggle = !toggle;
    renderPage();
};

var renderPage = function renderPage() {
    var mainTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            toggle ? 'Hide Details' : 'Show Details'
        ),
        toggle && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Here are the details you requested'
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(mainTemplate, appRoot);
};

renderPage();
