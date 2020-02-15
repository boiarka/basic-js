module.exports = function countCats(matrix) {
	let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let z = 0; z < matrix[i].length; z++) {
			if (matrix[i][z] == '^^') {
				sum += 1;
			}
		}
	}
	return sum;
};


