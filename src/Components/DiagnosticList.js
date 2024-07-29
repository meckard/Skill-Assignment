import { useState, useEffect } from "react";
import { getDiagnosisList } from "../Utils/DiagnosticListUtils";

export default function DiagnosticList(props) {
	const [selectPatient, setSelectPatient] = useState("Jessica Taylor");
	const [selectedPatient, setSelectedPatient] = useState("");
	const [diagnosisList, setDiagnosisList] = useState();

	useEffect(() => {
		if (props.patientlist) {
			const filterPatient = () => {
				return props?.patientlist?.filter(
					(patient) => patient.name == selectPatient
				);
			};

			setSelectedPatient(filterPatient);
		}
		console.log(selectedPatient[0]);
		setDiagnosisList(getDiagnosisList(selectedPatient[0]));
		console.log(diagnosisList);
	}, [props.patientlist, selectedPatient[0]]);

	return (
		<div className="diagnosticlist">
			<h2>Diagnostic List</h2>
            <div className="listheader">
                <p className="headername">Name</p>
                <p className="headerdesc">Description</p>
                <p className="headerstatus">Status</p>
            </div>
			{diagnosisList
				? diagnosisList.map((condition) => {
						return (
							<div className="condition">
								<p className="conditionname">{condition.name}</p>
								<p className="conditiondescription">
									{condition.description}
								</p>
								<p className="conditionstatus">{condition.status}</p>
							</div>
						);
				  })
				: "Loading..."}
		</div>
	);
}
