import { useState, useEffect } from 'react'
import Error from './Error'

const initPatientObj = () => ({
	owner: '',
	vetName: '',
	email: '',
	date: '',
	symptoms: '',
})

const Form = ({ patientsArr, setPatientsArr, patientMemo, setPatientID }) => {
	const [patient, setPatient] = useState(initPatientObj())
	const [error, setError] = useState(false)

	const isEditPatient = !!patient.id

	useEffect(() => {
		if (patientMemo) {
			setPatient(patientMemo)
		}
	}, [patientMemo])

	const onChangeValue = key => e => {
		setPatient({ ...patient, [key]: e.target.value })
	}

	const generateID = () => {
		const date = Date.now().toString(36)
		const random = Math.random().toString(36).substring(2)
		return random + date
	}

	const handleSubmit = e => {
		e.preventDefault()

		// validate
		const { owner, vetName, email, date, symptoms, id } = patient
		if ([owner, vetName, email, date, symptoms].includes('')) {
			setError(true)
			return
		}

		setError(false)

		const newPatient = {
			id,
			owner,
			vetName,
			email,
			date,
			symptoms,
		}

		if (!isEditPatient) {
			newPatient.id = generateID()
			setPatientsArr([...patientsArr, newPatient])
		} else {
			setPatientsArr(
				patientsArr.map(pacientState =>
					pacientState.id === patient.id ? newPatient : pacientState
				)
			)
			setPatientID(null)
		}

		cleanData()
	}

	const cleanData = () => {
		setPatient(initPatientObj())
	}

	return (
		<div className='md:w-1/2 lg:w-2/5'>
			<h2 className='font-black text-3xl text-center'>Follow-up pacients</h2>

			<p className='text-lg text-center mt-5 mb-10'>
				Add Pacients and {''}
				<span className='text-indigo-600 font-bold'>schedule them</span>
			</p>

			<form
				onSubmit={handleSubmit}
				className='mx-5 md:mx-0 bg-white shadow-md rounded-lg py-8 px-5 mb-10'
			>
				{error && <Error msg='All fields are obligatory' />}
				<div className='mb-5'>
					<label
						htmlFor='vet'
						className='block text-gray-700 uppercase font-bold'
					>
						Vet Name
					</label>
					<input
						id='vet'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						type='text'
						placeholder='Vet name'
						value={patient.vetName}
						onChange={onChangeValue('vetName')}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='owner'
						className='block text-gray-700 uppercase font-bold'
					>
						Owner Name
					</label>
					<input
						id='owner'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						type='text'
						placeholder='Owner name'
						value={patient.owner}
						onChange={onChangeValue('owner')}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='email'
						className='block text-gray-700 uppercase font-bold'
					>
						Email
					</label>
					<input
						id='email'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						type='email'
						placeholder='Owner email'
						value={patient.email}
						onChange={onChangeValue('email')}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='date'
						className='block text-gray-700 uppercase font-bold'
					>
						Date
					</label>
					<input
						id='date'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						type='date'
						value={patient.date}
						onChange={onChangeValue('date')}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='symptoms'
						className='block text-gray-700 uppercase font-bold'
					>
						Symptoms
					</label>
					<textarea
						id='symptoms'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						placeholder='Describe symptoms'
						value={patient.symptoms}
						onChange={onChangeValue('symptoms')}
					/>
				</div>

				<input
					type='submit'
					className={`w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors ${
						!isEditPatient
							? 'bg-indigo-600 hover:bg-indigo-700'
							: 'bg-green-600 hover:bg-green-700'
					}`}
					value={`${isEditPatient ? 'Edit' : 'Add'} Pacient`}
				/>
			</form>
		</div>
	)
}

export default Form
