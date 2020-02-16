module.exports = function createDreamTeam(members) {
	if (Object.prototype.toString.call(members) === '[object Array]') {

		let sum = '';
		let res;
		members.forEach((name) => {
			if (typeof name === 'string') {
				let firstName = name.trim();
				sum += firstName[0].toLowerCase();
			}
		});
		res = String(sum).split('').sort().join('').toUpperCase();
		return res;

	} else {

		return false;

	}


};