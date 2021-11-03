import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../css/Nav.css'
import Logo from '../images/comp.png'
import Sidebar from './Sidebar'
import { FiAlignCenter, FiX } from "react-icons/fi";

const Nav = () => {
	const ref = useRef()
	const [toggle, setToggle] = useState(false)

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (toggle && ref.current && !ref.current.contains(e.target)) {
				setToggle(false)
			  }
		}

		const checkWindow = (e) => {
			if (window.innerWidth > 767) {
				setToggle(false)
			}
		}

		document.addEventListener("mousedown", checkIfClickedOutside)
		window.addEventListener("resize", checkWindow)

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside)
			window.removeEventListener("resize", checkWindow)
		  }
	}, [toggle])

	return (
		<>
			<div className="bg-white py-6 shadow-sm">
				
				{!toggle ? (
					<div onClick={() => setToggle(!toggle)} className="cursor-pointer flex justify-end items-center sm:hidden pr-6">
						<FiAlignCenter className="text-3xl" />
					</div>
				): (
					<div ref={ref} onClick={() => setToggle(!toggle)} className="cursor-pointer flex justify-end items-center sm:hidden pr-6">
						<FiX className="text-3xl" />
					</div>
				) }
				
				<div className="grid-cols-1 sm:grid-cols-2 hidden sm:grid">
					<div className="pl-12">
						<div className="mb-4">
							<img src={Logo} alt="" />
						</div>
						<ul className="flex space-x-4 text-black">
							<li className="flex items-center">
								<NavLink to="/" className="uppercase nav-item font-bold" exact={true}>Home</NavLink>
							</li>
						
							<li className="flex items-center">
								<NavLink to="/services" className="uppercase nav-item font-bold">Services Offered</NavLink>
							</li>

							<li className="flex items-center">
								<NavLink to="/about" className="uppercase nav-item font-bold">About</NavLink>
							</li>
							<li className="flex items-center">
								<NavLink to="/contact" className="uppercase nav-item font-bold">Contact Us</NavLink>
							</li>
						</ul>
					</div>
					
					<div className="flex justify-end items-end">
						<Link to="/book"><button className="title-book hover:bg-blue-900 hover:text-white px-6 py-2 text-black uppercase font-bold">Book a Schedule</button></Link>
					</div>
				</div>

			</div>
			
			<Sidebar toggle={toggle} />
		</>
	)
}

export default Nav
