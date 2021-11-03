import React, {useState} from 'react'

const Services = ({description}) => {
	const [open, setOpen] = useState(false)

	return (
		<div className="w-full">
			<div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="bg-blue-400 py-2 cursor-pointer opacity-90">
				<h1 className=" text-2xl text-black uppercase font-bold pl-2">Services 1</h1>
			</div>
			{open && 
			<div className="bg-blue-300 p-4 text-lg text-black mt-1 opacity-90">
				<p>
				{description}
				</p>
			</div>
			}
		</div>
	)
}

export default Services
