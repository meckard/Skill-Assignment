import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export default function PatientHistory(props) {
	const [selectPatient, setSelectPatient] = useState("Jessica Taylor");
	const [selectedPatient, setSelectedPatient] = useState("");
	const [labels, setLabels] = useState();
	const [diastolic, setDiastolic] = useState();
	const [systolic, setSystolic] = useState();

	//Filters patient list to selected patient
	useEffect(() => {
		if (props.patientlist) {
			const filterPatient = () => {
				return props?.patientlist?.filter(
					(patient) => patient.name == selectPatient
				);
			};

			setSelectedPatient(filterPatient);

			console.log(selectedPatient[0]);

			if (selectedPatient[0] !== undefined) {
				const getLabels = selectedPatient[0]?.diagnosis_history
					?.slice(0, 6)
					.map((label) => {
						return `${label.month.slice(0,3)}, ${label.year}`;
					});

				setLabels(getLabels.reverse());

				const getDiastolic = selectedPatient[0]?.diagnosis_history
					?.slice(0, 6)
					.map((pressure) => {
						return pressure.blood_pressure.diastolic?.value;
					});

				setDiastolic(getDiastolic);

				const getSystolic = selectedPatient[0]?.diagnosis_history
					?.slice(0, 6)
					.map((pressure) => {
						return pressure.blood_pressure.systolic?.value;
					});

				setSystolic(getSystolic);
			}
		}
	}, [props.patientlist, selectedPatient[0]]);

	//Sets up labels for the chart using the month and year of the selected patient

	console.log(diastolic);
	console.log(systolic);
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
	};
	const data = {
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

	console.log(selectedPatient);
	console.log(labels);

	return (
		<div className="diagnosishistory">
			<h2>Diagnosis History</h2>
			<div className="bphistory">
				<div className="bpchart">
					<h3>Blood Pressure</h3>
					<Line
						id="linechart"
						height="187px"
						options={options}
						data={data}
					/>
				</div>
				<div className="legend">
                    <div className="systolic">
                        <h4>Systolic</h4>
                    </div>
                    <div className="diastolic">
                        <h4>Diastolic</h4>
                    </div>
                </div>
			</div>
		</div>
	);
}
