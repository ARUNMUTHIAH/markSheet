import { React } from 'react';

const TableHeader = (heading, key) =>
	<th key={ key } className="header">{heading}</th>;

export default TableHeader;
