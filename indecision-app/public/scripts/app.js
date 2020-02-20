"use strict";

var appRoot = document.getElementById('app');

var flag = false;

var toggleDetails = function toggleDetails() {
    flag = !flag;
    console.log(flag);
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleDetails },
            !flag ? "Show Details" : "Hide Details"
        ),
        React.createElement(
            "p",
            null,
            flag ? "Here are the details" : ""
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
