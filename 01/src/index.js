import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
	<div className="wrapper">
		<h1 className="mainHeader">Hello, hello</h1>
		<h2 className="secondaryHeader">Heja, hej</h2>
	</div>
);

ReactDOM.render(
	//rendered element
	<App />,
	// <h1>Siema, ściema</h1>,
	// target
	document.getElementById('root')
);
