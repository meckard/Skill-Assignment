import { useState, useEffect } from "react";
import calendarIcon from '../Images/BirthIcon.svg'
import femaleIcon from '../Images/FemaleIcon.svg'
import phoneIcon from '../Images/PhoneIcon.svg'
import insuranceIcon from '../Images/InsuranceIcon.svg'

export default function PatientProfile(props) {
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
		<div className="patientprofile">
			{selectedPatient[0] ? (
				<div className="profile">
					<div className="profilehead">
						<img
							src={selectedPatient[0].profile_picture}
							alt="The Patient"
						/>
						<h2>{selectedPatient[0].name}</h2>
					</div>
                    <div className="profilebody">
                        <div className="textsegment">
                            <img src={calendarIcon} alt='a calendar icon'/>
                            <div className="profiletext">
                                <p className="texttitle">Date Of Birth</p>
                                <p className="textdata">{selectedPatient[0].date_of_birth}</p>
                            </div>
                        </div>
                        <div className="textsegment">
                            <img src={femaleIcon} alt='The female symbol'/>
                            <div className="profiletext">
                                <p className="texttitle">Gender</p>
                                <p className="textdata">{selectedPatient[0].gender}</p>
                            </div>
                        </div>
                        <div className="textsegment">
                            <img src={phoneIcon} alt='a phone icon'/>
                            <div className="profiletext">
                                <p className="texttitle">Contact Info</p>
                                <p className="textdata">{selectedPatient[0].phone_number}</p>
                            </div>
                        </div>
                        <div className="textsegment">
                            <img src={phoneIcon} alt='a phone icon'/>
                            <div className="profiletext">
                                <p className="texttitle">Emergency Contacts</p>
                                <p className="textdata">{selectedPatient[0].emergency_contact}</p>
                            </div>
                        </div>
                        <div className="textsegment">
                            <img src={insuranceIcon} alt='a sheild with a check in it'/>
                            <div className="profiletext">
                                <p className="texttitle">Insurance Provider</p>
                                <p className="textdata">{selectedPatient[0].insurance_type}</p>
                            </div>
                        </div>
                        <button>Show All Information</button>
                    </div>
				</div>
			) : (
				"loading..."
			)}
		</div>
	);
}
