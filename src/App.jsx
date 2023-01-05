import { useState, useMemo, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PacientList from './components/PacientList'

function App() {
	const [patientsArr, setPatientsArr] = useState([])
	const [patientID, setPatientID] = useState(null)

	useEffect(() => {
		const pacientsLS = JSON.parse(localStorage.getItem('pacients'))
		pacientsLS?.length > 0 && setPatientsArr(pacientsLS)
	}, [])

	useEffect(() => {
		localStorage.setItem('pacients', JSON.stringify(patientsArr))
	}, [patientsArr])

	const deletePacient = id => {
		setPatientsArr(patientsArr.filter(pacient => pacient.id !== id))
	}

	const patientMemo = useMemo(
		() =>
			patientID
				? patientsArr.filter(patient => patient.id === patientID)[0]
				: null,
		[patientID]
	)

	return (
		<div className='container mx-auto mt-5'>
			<Header />
			<div className='mt-12 sm:flex'>
				<Form
					patientsArr={patientsArr}
					setPatientsArr={setPatientsArr}
					patientMemo={patientMemo}
					setPatientID={setPatientID}
				/>
				<PacientList
					patientsArr={patientsArr}
					setPatientID={setPatientID}
					deletePacient={deletePacient}
				/>
			</div>
		</div>
	)
}

export default App
