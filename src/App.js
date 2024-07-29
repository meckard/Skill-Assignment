import "./App.css";
import Navbar from "./Components/Nav";
import PatientPanel from "./Components/Patient-panel";
import { useState, useEffect } from "react";
import PatientHistory from "./Components/PatientHistory";
import DiagnosticList from "./Components/DiagnosticList";

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
		getPatients();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<body>
				<div className="patientdetails">
					<PatientPanel patientlist={patientlist} />
					<div className="middlecolumn">
						<PatientHistory patientlist={patientlist} />
            <DiagnosticList patientlist={patientlist} />
					</div>
          <div className="rightcolumn">
            
          </div>
				</div>
			</body>
		</div>
	);
}

export default App;
