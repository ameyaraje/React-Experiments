console.log('App.js is running!');

var appObj = {
  title: 'Indecision App',
//   subtitle: 'A demo to learn ReactJS',
  options: ['One', 'Two']
};
var template = (
  <div>
    <h1>{appObj.title}</h1>
    {appObj.subtitle && <p>{appObj.subtitle}</p>}
    {appObj.options.length > 0 ? <p>Here are your options: {appObj.options}</p> : 'No options provided!'}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Tony Stark',
  age: 52,
  location: 'New York'
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

ReactDOM.render(template, document.getElementById('app'));