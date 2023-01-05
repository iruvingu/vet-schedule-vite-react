const patientData = [
	{ key: 'vetName', value: 'Name' },
	{ key: 'owner', value: 'Owner' },
	{ key: 'email', value: 'Email' },
	{ key: 'date', value: 'Date' },
	{ key: 'symptoms', value: 'Symptoms' },
]
const Patient = ({ pacientState, setPatientID, deletePacient }) => {
	return (
		<div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
			{patientData.map(patient => {
				return (
					<p
						key={patient.key}
						className='font-bold mb-3 text-gray-700 uppercase'
					>
						{patient.value}: {''}
						<span className='font-normal normal-case'>
							{pacientState[patient.key]}
						</span>
					</p>
				)
			})}

			<div className='flex justify-between mt-9'>
				<button
					type='button'
					className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors font-bold rounded-lg uppercase'
					onClick={() => setPatientID(pacientState.id)}
				>
					Edit
				</button>
				<button
					type='button'
					className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white transition-colors font-bold rounded-lg uppercase'
					onClick={() => deletePacient(pacientState.id)}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Patient
