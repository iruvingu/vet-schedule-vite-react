import React from 'react'

const Error = ({ msg }) => {
	return (
		<div className='bg-red-800 text-white text-center p-3 mb-3 uppercase font-bold rounded-md'>
			<p>{msg}</p>
		</div>
	)
}

export default Error
