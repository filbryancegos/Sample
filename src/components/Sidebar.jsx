import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../css/Sidebar.css'
import Logo from '../images/comp.png'

const Sidebar = ({toggle}) => {
	return (
		<div className={`sideBarContaner px-6 ${toggle? 'active' : ''}`}>
			<div className="flex justify-start py-4">
				<img className="text-center" src={Logo} alt="" />
			</div>
			<ul className=" text-black w-full ">
				<li className="flex py-4 ">
					<NavLink to="/" className="uppercase nav-item w-full text-left font-bold" exact={true}>Home</NavLink>
				</li>
				<li className="flex py-4">
					<NavLink to="/services" className="uppercase nav-item w-full text-left font-bold">Services Offered</NavLink>
				</li>

				<li className="flex py-4">
					<NavLink to="/about" className="uppercase nav-item w-full text-left font-bold">About</NavLink>
				</li>
				<li className="flex py-4">
					<NavLink to="/contact" className="uppercase nav-item w-full text-left font-bold">Contact Us</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
