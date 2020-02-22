class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <AddOption />
                <Options />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer!</h2>
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
                Options Component
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return 'Option 1';
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption Component
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));