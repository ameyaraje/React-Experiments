class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);

        this.state = {
            options: ['First Option', 'Second Option', 'Third Option', 'Fourth Option', 'Fifth Option']
        };
    }
    
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(option) {

        if (!option) 
            return 'Please enter a valid option';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exists. Please enter a new option.'

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
        // console.log(option);
    }

    handlePickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);

    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!'; 
    
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption} />
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
            <button onClick={props.handlePickOption} disabled={!props.hasOptions}>
                What do I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            {props.options.map((option) => <Option key={option} optionText={option} />)}
            <Option />
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);

        this.state = {
            errorMessage: undefined
        }
    }

    addOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                errorMessage: error
            };
        });
        
    }

    render() {
        return (
            <div>
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));