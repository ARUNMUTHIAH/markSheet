/* eslint-disable max-len */
const getSummary = (rankedData) => {
	const sortedYear = rankedData.map((number) => number.estimate2022);
	const totalPopulation = rankedData.reduce((a, curr) => a + curr.estimate2022, 0);
	const minimumPopulation = Math.min(...sortedYear);
	const maximumPopulation = Math.max(...sortedYear);
	const MinimumState = rankedData.find((minimum) => minimum.estimate2022 === minimumPopulation);
	const MaximumState = rankedData.find((maximum) => maximum.estimate2022 === maximumPopulation);

	return { totalPopulation, minimumPopulation, maximumPopulation, MinimumState, MaximumState };
};

export default getSummary;
