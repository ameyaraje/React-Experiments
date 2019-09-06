class IndecisonApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "You're a slave now";
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        <p>{`Options Component here with length ${this.props.options.length}`}</p>
        {
          this.props.options.map((option) => <Option key={option} opText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.opText}</p>
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
