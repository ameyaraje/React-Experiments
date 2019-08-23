'use strict';

console.log('App.js is running!');

var appObj = {
  title: 'Indecision App',
  //   subtitle: 'A demo to learn ReactJS',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObj.title
  ),
  appObj.subtitle && React.createElement(
    'p',
    null,
    appObj.subtitle
  ),
  appObj.options.length > 0 ? React.createElement(
    'p',
    null,
    'Here are your options: ',
    appObj.options
  ) : 'No options provided!',
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Tony Stark',
  age: 52,
  location: 'New York'
};
var templateTwo = React.createElement(
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
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

ReactDOM.render(template, document.getElementById('app'));
