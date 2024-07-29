import { useState, useEffect } from "react";
import {
	getRespiratory,
	getTemperature,
	getHeartRate,
} from "../Utils/PatientHistoryUtils";

export default function PatientStatBlock(props) {
	const [respiratory, setRespiratory] = useState();
	const [individualRes, setIndividualRes] = useState();
	const [temperature, setTemperature] = useState();
	const [individualTemp, setIndividualTemp] = useState();
	const [heartRate, setHeartRate] = useState();
	const [individualHR, setIndividualHR] = useState();

	useEffect(() => {
		setRespiratory(getRespiratory(props.selectedPatient[0]));
		setTemperature(getTemperature(props.selectedPatient[0]));
		setHeartRate(getHeartRate(props.selectedPatient[0]));
		setIndividualRes(respiratory);
		setIndividualTemp(temperature);
		setIndividualHR(heartRate);
	}, [props]);

	const chooseType = (blockType) => {
		if (blockType == "respiratory") {
			return individualRes;
		} else if (blockType == "temperature") {
			return individualTemp;
		} else {
			return individualHR;
		}
	};

	return (
		<div className="statblock">
			<div className={`${props.blockType}`}>
				<img className="statblockimage" src={props.pic} />
				<p className="statblockname">{`${props.name}`}</p>
				<p className="statblockvalue">{`${
					chooseType(props.blockType)
						? `${chooseType(props.blockType)[0].value} ${props.suffix}`
						: "loading"
				}`}</p>
				<p className="statblocklevel">{`${
					chooseType(props.blockType)
						? chooseType(props.blockType)[0].levels
						: "loading"
				}`}</p>
			</div>
		</div>
	);
}
