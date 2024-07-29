export const getDiagnosisList = (selectedPatient) => {
	return selectedPatient?.diagnostic_list?.map((condition) => {

        console.log(condition.name)
		return (
           condition
        )
})}
