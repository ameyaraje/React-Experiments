class IndecisonApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ['One', 'Two', 'Three', 'Four', 'Five']
    };
  }

  handleSelectOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  };

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleAddOption(option) {
    if(!option){
      alert('Enter an option you banana')
    }
    else if (this.state.options.indexOf >= 0) {
      alert('This option already exists')
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = "Indecision App";
    const subtitle = "You're a slave now";

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handleSelectOption={this.handleSelectOption}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handleSelectOption} disabled={!props.hasOptions}>
        What do I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option key={option} opText={option}/>)
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p>{props.opText}</p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  
  handleAddOption(e) {
    e.preventDefault();
    const optionText = e.target.elements.option.value.trim(); // e -> event; e.target -> <form>; e.target.elements -> [<element>....<element>]; e.target.elements."name-of-option".value -> shiz we want
    const error = this.props.handleAddOption(optionText);
    
    this.setState(() => {
      return {
        error: error
      };
    });
  }
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"></input>
        <button>AddOption</button>      
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisonApp />, document.getElementById('app'));
