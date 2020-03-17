import React from 'react';
import ListWraper from './components/listwraper/listwraper';
import './index.css';
import { twitterAccounts } from './data/twitterAccounts';

const App = () => (
	<div>
		<ListWraper name={twitterAccounts[0].name} />
	</div>
);

export default App;
