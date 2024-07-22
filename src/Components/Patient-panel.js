import searchicon from "../Images/searchIcon.png";
import ListPatient from "./ListPatient";
import {useState, useEffect} from "react";
import moreHorizontal from '../Images/moreHorizontal.png'

export default function PatientPanel(props) {

	console.log(props.patientlist)

	return (
		<div className="patientpanel">
			<div className="panelheader">
				<h2 className="panelheadertext">Patients</h2>
				<img
                    className="searchIcon"
					src={searchicon}
					alt="A magnifying glass icon"
				/>
			</div>
			<div>
				{props.patientlist?.map((patient) => {
					return (
						<div className="listpatient">
							<img
                                className="panelprofileimg"
								src={patient.profile_picture}
								alt="Patient profile picture"
							/>
							<div className="patientlistinfo">
								<p className="patientname">{patient.name}</p>
								<p className="patientagegender">{`${patient.gender}, ${patient.age}`}</p>
							</div>
							<img
                                className="morehorizontal"
								src={moreHorizontal}
								alt="more icon"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
