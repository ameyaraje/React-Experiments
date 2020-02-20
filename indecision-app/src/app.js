var app = {
    title: 'Indecision App',
    subtitle: 'You are now controlled by a computer',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
    
};

const deleteOptions = () => {
    app.options = [];
    renderIndecisionApp();
};

var appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? "Here are your options" : "No options specified"}
            <p>Number of options: {app.options.length}</p>
            <button onClick={deleteOptions}>Remove Options</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();