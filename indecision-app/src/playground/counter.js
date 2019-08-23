let count = 0;
const minusOne = () => {
  count--;
  console.log('subtracted!');
  renderAgain();
};
const addOne = () => {
  count++;
  console.log('added!');
  renderAgain();
};
const resetfunc = () => {
  count = 0;
  console.log('reset!');
  renderAgain();
};


const appRoot = document.getElementById('app');

const renderAgain = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetfunc}>reset</button>
    </div>
  );

  ReactDOM.render(templateThree, appRoot);
};

renderAgain();