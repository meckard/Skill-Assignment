const getLabels = (selectedPatient) => {
	return selectedPatient?.diagnosis_history.slice(0, 6).map((label) => {
		return `${label.month.slice(0, 3)}, ${label.year}`;
	});
};

const getDiastolic = (selectedPatient, setthing) => {
	return selectedPatient?.diagnosis_history?.slice(0, 6).map((pressure) => {
		setthing(pressure.blood_pressure.diastolic.levels);
		return pressure.blood_pressure.diastolic?.value;
	});
};
const getSystolic = (selectedPatient, setthing) => {
	return selectedPatient?.diagnosis_history?.slice(0, 6).map((pressure) => {
		setthing(pressure.blood_pressure.systolic.levels);
		return pressure.blood_pressure.systolic?.value;
	});
};

const getRespiratory = (selectedPatient) => {
	return selectedPatient?.diagnosis_history?.slice(0, 6).map((respiratory) => {
		return respiratory.respiratory_rate;
	});
};

const getTemperature = (selectedPatient) => {
	return selectedPatient?.diagnosis_history?.slice(0, 6).map((temp) => {
		return temp.temperature;
	});
};

const getHeartRate = (selectedPatient) => {
	return selectedPatient?.diagnosis_history?.slice(0, 6).map((HR) => {
		return HR.heart_rate;
	});
};



module.exports = {
	getLabels,
	getDiastolic,
	getSystolic,
	getRespiratory,
	getTemperature,
	getHeartRate,
};
