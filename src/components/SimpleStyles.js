/* eslint-disable react/jsx-child-element-spacing */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-key */
/* eslint-disable id-match */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import { React } from 'react';
import markList from '../service/data';

const rowStyle = {
	marginTop: '20px',
	textShadow: '2px 2px 2px blue',
	fontSize: '20px',
	textAlign: 'center',
};
const headerStyle = {
	fontSize: '23px',
	border: '5px double',
	background: 'wheat',
	textAlign: 'center',
};
const numberStyle = {
	display: 'inline-block',
	fontSize: '22px',
	width: '102px',
	border: '3px groove  ',
	boxShadow: '5px 5px 10px 2px black',
	textAlign: 'right',
};

const titleStyle = {
	paddingLeft: '355px',
	fontWeight: 'bold',
	textTransform: 'uppercase',
	paddingTop: '20px',
	textShadow: '1px 1px 1px blue',
};

const stringStyle = {
	...numberStyle,
	textAlign: 'left',
};
// eslint-disable-next-line max-lines-per-function
const SimpleStyles = () => {
	const lines = markList.map(({ name, tamil, english, maths, science, social }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ stringStyle }> {name} </span>
			<span style={ numberStyle }> {tamil} </span>
			<span style={ numberStyle }>{english} </span>
			<span style={ numberStyle }> {maths} </span>
			<span style={ numberStyle }> {science} </span>
			<span style={ numberStyle }> {social} </span>
		</div>);

	return <div>
		<div style={ headerStyle }><h1>MARKLIST</h1></div>
		<div style={ titleStyle }>
			<span style={ stringStyle }> name </span>
			<span style={ numberStyle }> tamil </span>
			<span style={ numberStyle }> english </span>
			<span style={ numberStyle }> maths </span>
			<span style={ numberStyle }> science </span>
			<span style={ numberStyle }> social </span> </div>
		<div>{lines}</div>
	</div>;
};

export default SimpleStyles;
