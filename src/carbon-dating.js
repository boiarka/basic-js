const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string') return false;
	if (/[A-Za-z]/.test(sampleActivity) || parseFloat(sampleActivity) > 15 || parseFloat(sampleActivity) <= 0) return false;
	return Math.ceil(Math.abs(Math.log(parseFloat(sampleActivity) / MODERN_ACTIVITY) * HALF_LIFE_PERIOD) / 0.693);
};