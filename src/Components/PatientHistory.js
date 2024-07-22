import Chart from 'chart.js/auto'

export default function PatientHistory (props) {
    new Chart(
        document.getElementById('patientchart'),
        {
            type: 'line',
            data: {

            }
        }
    )

    return (
        <div className='patienthistory'>
           <div><canvas id='patientchart'></canvas></div>
        </div>
    )
}