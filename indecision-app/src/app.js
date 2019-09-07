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
  handleClick() {
    alert("Button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What do I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this)
  }

  removeAll() {
    console.log(this.props.options)
  }

  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
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
  constructor(props) {
    super(props);
    this.handleTextEntered = this.handleTextEntered.bind(this);
  }
  
  handleTextEntered(e) {
    e.preventDefault();
    const optionText = e.target.elements.option.value.trim(); // e -> event; e.target -> <form>; e.target.elements -> [<element>....<element>]; e.target.elements."name-of-option".value -> shiz we want
    if(optionText) {
      alert(optionText)
    }
  }
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleTextEntered}>
        <input type="text" name="option"></input>
        <button>AddOption</button>      
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisonApp />, document.getElementById('app'));
