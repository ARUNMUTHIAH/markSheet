
const passMark = 35;

const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return tamil + english + maths + science + social;
};

const getResult = (mark) => (Math.min(
	mark.tamil, mark.english, mark.maths, mark.science, mark.social
) >= passMark
	? 'PASS'
	: 'FAIL');

const getRank = (students) => {
	let rank = 1;

	const sortedData = students.sort((a, b) => b.total - a.total);
	const ranking = sortedData.map((student) => ({
		...student,
		rank: student.result === 'PASS' ? rank++ : '-',
	}));

	return ranking;
};

const addFields = (students) => ({
	...students,
	total: getTotal(students),
	result: getResult(students),
});

const processedOutput = (studentRecord) => {
	const finalData = studentRecord.map(addFields);

	return getRank(finalData);
};

export default processedOutput;
