console.log("app is running")

let toggle = false;

const toggleDetails = () => {
    toggle = !toggle;
    renderPage();
};


const renderPage = () => {
    const mainTemplate = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>
                {toggle ? 'Hide Details': 'Show Details'}
            </button>
            {toggle && (
                <div>
                    <p>Here are the details you requested</p>
                </div>
            )}
        </div>
    );
    
    const appRoot = document.getElementById('app');
    ReactDOM.render(mainTemplate, appRoot);
};

renderPage();