import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
	getLabels,
	getDiastolic,
	getSystolic,
} from "../Utils/PatientHistoryUtils";
import { data, options } from "../Utils/chartconfig";
import upArrow from "../Images/ArrowUp.svg";
import respiratorypic from "../Images/respiratory rate.svg";
import temperaturepic from "../Images/temperature.svg";
import HRpic from "../Images/HeartBPM.svg";
import expandMore from "../Images/expand_more.svg";
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
import PatientStatBlock from "./PatientStatBlocks";

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
	const [systolicAverage, setSystolicAverage] = useState();
	const [diastolicAverage, setDiastolicAverage] = useState();

	useEffect(() => {
		//Filters patient list to selected patient
		if (props.patientlist) {
			const filterPatient = () => {
				return props?.patientlist?.filter(
					(patient) => patient.name == selectPatient
				);
			};

			setSelectedPatient(filterPatient);

			//Takes selected patient and gets labels, and bp values and averages
			if (selectedPatient[0] !== undefined) {
				setLabels(getLabels(selectedPatient[0]).reverse());

				setDiastolic(getDiastolic(selectedPatient[0], setDiastolicAverage));

				setSystolic(getSystolic(selectedPatient[0], setSystolicAverage));
			}
		}
	}, [props.patientlist, selectedPatient[0]]);

	//Sets up labels for the chart using the month and year of the selected patient

	console.log(selectedPatient);
	console.log(labels);

	return (
		<div className="diagnosishistory">
			<h2>Diagnosis History</h2>
			<div className="bphistory">
				<div className="bpchart">
					<div className="bpheader">
						<h3>Blood Pressure</h3>
						<div className="chartfilter">
							<p>Last 6 months</p>
							<img
								src={expandMore}
								alt="a down arrow"
							/>
						</div>
					</div>
					<Line
						id="linechart"
						height="187px"
						options={options}
						data={data(labels, diastolic, systolic)}
					/>
				</div>
				<div className="legend">
					<div className="systolic">
						<div className="systoliclegend">
							<div className="systolicdot"></div>
							<h4>Systolic</h4>
						</div>
						<div className="systolicrate">{systolic?.slice(5)}</div>
						<div className="systolicaverage">
							<img
								src={upArrow}
								alt="An up arrow"
								className="arrowup"
							/>
							{systolicAverage}
						</div>
					</div>
					<div className="bpdivider"></div>
					<div className="diastolic">
						<div className="diastoliclegend">
							<div className="diastolicdot"></div>
							<h4>Diastolic</h4>
						</div>
						<div className="diastolicrate">{diastolic?.slice(5)}</div>
						<div className="diastolicaverage">
							<img
								src={upArrow}
								alt="An up arrow"
								className="arrowup"
							/>
							{diastolicAverage}
						</div>
					</div>
				</div>
			</div>
			<div className="patientstatblocks">
				<PatientStatBlock
					selectedPatient={selectedPatient}
					blockType={"respiratory"}
					pic={respiratorypic}
					name="Respiratory"
					suffix="bpm"
				/>
				<PatientStatBlock
					selectedPatient={selectedPatient}
					blockType={"temperature"}
					pic={temperaturepic}
					name="Temperature"
					suffix="&deg;F"
				/>
				<PatientStatBlock
					selectedPatient={selectedPatient}
					blockType={"heartRate"}
					pic={HRpic}
					name="Heart Rate"
					suffix="bpm"
				/>
			</div>
		</div>
	);
}
