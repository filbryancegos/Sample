import React, { useState } from 'react'

const Contact = () => {

	const initialState = {
		name: '',
		email: '',
		nationality: '',
		phone: '',
		subject: '',
		message: '',
	}

	const [form, setForm] = useState(initialState)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const { name, email, nationality, phone, subject, message  } = form;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}

	const handleSumbit = (e) => {
		e.preventDefault();

		const values = [ name, email, nationality, phone, subject, message ]
		let errorMsg = '';
		let success = ''
		
		const allFieldsFilled = values.every((field) => {
			console.log(field);
			const value = `${field}`.trim();
			return value !== '' && value !== '0';
		});
	
		
		if (allFieldsFilled) {
			success = 'Success!!!';
			console.log("success");
			clearFields()
		} else {
			errorMsg = 'Please fill out all the fields.';
			console.log("error");
		}

		setError(errorMsg)
		setSuccess(success)

		setTimeout(() => {
			setSuccess('')
		},3000)

	}

	const clearFields = () => {
		setForm({
			name: '',
			email: '',
			nationality: '',
			phone: '',
			subject: '',
			message: '',
		})
	}


	return (
		<div className="bg-yellow-200 p-4 opacity-80">
			{success && <p className="text-green-500 text-base font-bold mb-2">{success}</p>}
			{error && <p className="text-red-500 text-base font-bold mb-2">{error}</p>}
			<form onSubmit={handleSumbit}>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
					<div className="col-span-1">
						<div>
							<input 
							name="name"
							value={form.name}
							onChange={handleChange} 
							type="text" className="mt-1 block w-full" placeholder="Name"/>
						</div>

						<div>
							<input
							name="email"
							value={form.email}
							onChange={handleChange}  
							type="email" className="mt-1 block w-full" placeholder="Email"/>
						</div>
						
					</div>
					<div className="col-span-1">
						<div>
							<input
							name="nationality"
							value={form.nationality}
							onChange={handleChange}  
							type="text" className="mt-1 block w-full" placeholder="Nationality"/>
						</div>

						<div>
							<input 
							name="phone"
							value={form.phone}
							onChange={handleChange}  
							type="text" className="mt-1 block w-full" placeholder="Phone"/>	
						</div>
						
					</div>
					<div className="col-span-1 sm:col-span-2">
						<div>
						<input
							name="subject"
							value={form.subject}
							onChange={handleChange}  
							type="text" className="mt-1 block w-full" placeholder="subject"/>
						</div>
						
					</div>
					<div className="col-span-1 sm:col-span-2">
						<textarea 
						name="message"
						value={form.message}
						onChange={handleChange} 
						class="mt-1 block w-full" rows="3" placeholder="Message"></textarea>
					</div>
				</div>
				<button type="submit" className="bg-blue-400 px-6 py-2 mt-4 rounded-md shadow-lg">Submit</button>
			</form>
		</div>
	)
}

export default Contact
