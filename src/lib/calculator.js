module.exports.sum = (num1, num2) => {
	let int1 = parseInt(num1, 10);
	let int2 = parseInt(num2, 10);

	if (Number.isNaN(int1) || Number.isNaN(int2)) {
		throw new Error('Please check your input');
	}

	return int1 + int2;
};
