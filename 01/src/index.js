import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createElement('div', { className: 'wrapper', items: '2' }, [
	React.createElement('h1', { className: 'mainHeader' }, 'Hello, hello'),
	React.createElement('h2', { className: 'secondaryHeader' }, 'Siema, siema')
]);

ReactDOM.render(
	//rendered element
	App,
	// <h1>Siema, ściema</h1>,
	// target
	document.getElementById('root')
);
