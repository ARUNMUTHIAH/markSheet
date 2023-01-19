import { React } from 'react';
const processedMarkSheet = (student, index) =>
	<tr key={ index }>
		<td className="string">{student.name}</td>
		<td className="number">{student.tamil}</td>
		<td className="number">{student.english}</td>
		<td className="number">{student.maths}</td>
		<td className="number">{student.science}</td>
		<td className="number">{student.social}</td>
		<td className="number">{student.total}</td>
		<td className="string">{student.result}</td>
		<td className="number">{student.rank}</td>
	</tr>;

export default processedMarkSheet;
