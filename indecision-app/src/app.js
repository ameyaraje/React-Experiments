class IndecisonApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

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
        <Option />
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option goes here</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOption component here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisonApp />, document.getElementById('app'));
