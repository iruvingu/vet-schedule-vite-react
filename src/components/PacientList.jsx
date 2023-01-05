import Patient from './Patient'

const PacientList = ({ patientsArr, setPatientID, deletePacient }) => {
	return (
		<div className='md:w-1/2 lg:w-3/5'>
			{patientsArr.length ? (
				<>
					<h2 className='font-black text-3xl text-center'>Pacients List</h2>

					<p className='text-xl mt-5 mb-10  text-center'>
						Manage your {''}
						<span className='text-indigo-600 font-bold'>
							Patients and Schedules
						</span>
					</p>
					<div className='md:h-screen overflow-y-scroll'>
						{patientsArr.map(pacientState => {
							return (
								<Patient
									key={pacientState.id}
									pacientState={pacientState}
									setPatientID={setPatientID}
									deletePacient={deletePacient}
								/>
							)
						})}
					</div>
				</>
			) : (
				<>
					<h2 className='font-black text-3xl text-center'>No Patients yet</h2>

					<p className='text-xl mt-5 mb-10  text-center'>
						Start adding patients and {''}
						<span className='text-indigo-600 font-bold'>Will appear here</span>
					</p>
				</>
			)}
		</div>
	)
}

export default PacientList
