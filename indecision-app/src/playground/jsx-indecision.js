console.log('App.js is running!');

var appObj = {
  title: 'Indecision App',
//   subtitle: 'A demo to learn ReactJS',
  options: []
};

const optionEntered = (e) => {
  e.preventDefault();
  const userValue = e.target.elements.option.value;

  if (userValue) {
    appObj.options.push(userValue);
    e.target.elements.option.value = '';
    renderOptions();
  }
};

const removeOptions = () => {
  appObj.options = [];
  renderOptions();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObj.options.length);
  const option = appObj.options[randomNum];
  alert(option);
};

const renderOptions = () => {
  var template = (
    <div>
      <h1>{appObj.title}</h1>
      {appObj.subtitle && <p>{appObj.subtitle}</p>}
      {appObj.options.length > 0 ? <p>Here are your options: {appObj.options}</p> : 'No options provided!'}
      <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>What do I do?</button>
      <button onClick={removeOptions}>Delete options</button>
      <ol>
        {
          appObj.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={optionEntered}>
        <input name="option" type="text"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, document.getElementById('app'));
};


renderOptions();