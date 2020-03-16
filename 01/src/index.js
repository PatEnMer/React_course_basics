import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createElement('h1', null, 'Heja, heja, hej');

ReactDOM.render(
	//rendered element
	App,
	// <h1>Siema, ściema</h1>,
	// target
	document.getElementById('root')
);
