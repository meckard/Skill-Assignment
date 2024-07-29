export const options = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

export const data = (labels, diastolic, systolic) => {
	return {
		labels: labels,
		datasets: [
			{
				label: "Diastolic",
				data: diastolic,
				backgroundColor: "#8C6FE6",
				borderColor: "#7E6CAB",
				pointRadius: 8,
				tension: 0.5,
			},
			{
				label: "Systolic",
				data: systolic,
				backgroundColor: "#E66FD2",
				borderColor: "#C26EB4",
				pointRadius: 8,
				tension: 0.5,
			},
		],
	};
};
