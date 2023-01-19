import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons/Index';
import Input from './components/Input/Input';
import SimpleTable from './components/SimpleTable';
import markLists from './service/data';

const initialMarkSheet = {
	markSheets: markLists,
	currentMarkSheet: {
		name: '',
		tamil: 46,
		english: 65,
		maths: 85,
		science: 58,
		social: 75,
	},
};

const App = (context) => {
	const [state, setState] = useState(initialMarkSheet);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App" role="App">
			<SimpleTable { ...extendedContext }/>
			<Input { ...extendedContext }/>
			<Buttons { ...extendedContext }/>
		</div>
	);
};

export default App;
