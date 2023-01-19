import { React } from 'react';
import processedOutput from '../service/markSheetFunctions';
import TableHeader from './TableHeader';
import processedMarkSheet from './processedMarkSheet';

const headings = [
	'Name',
	'Tamil',
	'English',
	'Maths',
	'Science',
	'Social',
	'Total',
	'Result',
	'Rank',
];

const SimpleTable = (context) => {
	const { state: { markSheets }} = context;

	return <div>
		<h2 className="title"> MARKSHEET </h2>
		<table className="table">
			<thead>
				<tr>
					{headings.map(TableHeader)}
				</tr>
			</thead>
			<tbody>
				{processedOutput(markSheets).map(processedMarkSheet)}
			</tbody>
		</table>
	</div>;
};

export default SimpleTable;
