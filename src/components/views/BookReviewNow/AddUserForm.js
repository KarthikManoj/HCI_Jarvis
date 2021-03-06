import React, { useState } from 'react'


const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<h2><u>Name</u></h2>
			<input type="text" required name="name" value={user.name} onChange={handleInputChange} />
			<h2>Review</h2>
			<input type="text" required  name="username" value={user.username} onChange={handleInputChange} />
			<button>Add comment</button>
		</form>
	)
}

export default AddUserForm