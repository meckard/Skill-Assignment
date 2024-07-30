import { useState, useEffect } from "react";
import download from "../Images/download.png";

export default function LabResults(props) {
	const [selectPatient, setSelectPatient] = useState("Jessica Taylor");
	const [selectedPatient, setSelectedPatient] = useState("");

	useEffect(() => {
		//Filters patient list to selected patient
		if (props.patientlist) {
			const filterPatient = () => {
				return props?.patientlist?.filter(
					(patient) => patient.name == selectPatient
				);
			};

			setSelectedPatient(filterPatient);
		}
	}, [props.patientlist, selectedPatient[0]]);

	return (
		<div className="labresults">
            <h2>Lab Results</h2>
			{selectedPatient[0]
				? selectedPatient[0].lab_results.map((result) => {
						return (
							<div className="result">
								<p>{result}</p>
								<img
									src={download}
									alt="download icon"
								/>
							</div>
						);
				  })
				: "loading..."}
		</div>
	);
}
