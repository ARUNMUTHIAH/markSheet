import React from 'react';

const Add = (context) => {
	const { state, setState } = context;
	const { currentMarkSheet, markSheets } = state;

	return (
		<button onClick={ () => setState({
			...state,
			markSheets: [...markSheets, currentMarkSheet],
		}) }
		>ADD</button>);
};

export default Add;
