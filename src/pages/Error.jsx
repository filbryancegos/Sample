import React from 'react'
import { Link } from 'react-router-dom';
const Error = () => {
	return (
		<div className="flex justify-center items-center flex-col h-60">
			<h1 className="text-black text-8xl p-3">4<span className="text-blue-600">0</span>4</h1>
			<p className="text-black font-bold uppercase">page not found!</p>

			<Link to="/">
				<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 uppercase text-white mt-6">back to home</button>
			</Link>
			
		</div>
	)
}

export default Error
