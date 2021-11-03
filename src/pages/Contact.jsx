import React from 'react'
import Title from '../components/Title'
import Image from '../images/contact.jpg';
import styled from 'styled-components';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
import Form from '../components/Contact'

const Contact = () => {
	const title = 'Contact Us'
	return (
		<HeroContainer className="h-min-screen text-left">
			<Title title={title} />
			<div className="flex items-center h-screen w-full">
				<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 px-12 items-center h-full w-full">
					<div>
						<div className="flex space-x-4 items-center mb-4">
							<span className="bg-black p-2 rounded-full">
								<FaMapMarkerAlt className="text-lg text-white" />
							</span>
							<div className="text-white">12F, 2Quad Building, Cebu Business Park <br/> Cebu City, Cebu, Philippines   </div>
						</div>
						<div className="flex space-x-4 items-center mb-4">
							<span className="bg-black p-2 rounded-full">
								<FaVoicemail className="text-lg text-white" />
							</span>
							<div className="text-white">12F, 2Quad Building, Cebu Business Park <br/> Cebu City, Cebu, Philippines   </div>
						</div>
						<div className="flex space-x-4 items-center mb-4">
							<span className="bg-black p-2 rounded-full">
								<FaBlenderPhone className="text-lg text-white" />
							</span>
							<div className="text-white">12F, 2Quad Building, Cebu Business Park <br/> Cebu City, Cebu, Philippines   </div>
						</div>
					</div>
					<Form />	
				</div>
			</div>
		</HeroContainer>
	)
}

export default Contact

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Image});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
`;