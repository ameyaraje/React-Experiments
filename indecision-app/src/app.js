class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecison Application</h1>
        <p>You're a slave now</p>
      </div>
      );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What do I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options Component here</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
        </form>
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
