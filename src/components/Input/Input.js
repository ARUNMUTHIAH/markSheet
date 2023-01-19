import React from 'react';

const Input = (context) => {
	const { state, setState, config: { headers }} = context;
	const { currentMarkSheet } = state;

	return headers.map((header, key) => <span key={ key }>
		<input
			type="text"
			placeholder={ header }
			style={ { width: '60px', paddingRight: '56px' } }
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: { ...currentMarkSheet, [header]: value },
			}) }
		/>
	</span>);
};

export default Input;
