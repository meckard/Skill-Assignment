import "./App.css";
import Navbar from "./Components/Nav";
import PatientPanel from "./Components/Patient-panel";
import { useState, useEffect } from "react";
import PatientHistory from "./Components/PatientHistory";

function App() {
	const [patientlist, setPatientList] = useState();
	const patientUrl = "https://fedskillstest.coalitiontechnologies.workers.dev";
	const auth = window.btoa(
		`${process.env.REACT_APP_AUTH_USERNAME}:${process.env.REACT_APP_AUTH_PASSWORD}`
	);

	useEffect(() => {
		const getPatients = async () => {
			const response = await fetch(patientUrl, {
				headers: {
					Authorization: `Basic ${auth}`,
				},
			});

			console.log(response);

			const json = await response.json();
			console.log(json);

			setPatientList(json);
		};
    getPatients()
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<body>
				<PatientPanel patientlist={patientlist} />
        <PatientHistory patientlist={patientlist} />
			</body>
		</div>
	);
}

export default App;
