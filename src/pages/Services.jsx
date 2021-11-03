import React, { useState } from 'react'
import Title from '../components/Title'
import Image from '../images/services.jpg';
import styled from 'styled-components';
import Cards from '../components/Services';

const Services = () => {
	const title = 'Services Offered'
	const desc1 =  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat, doloribus velit sunt voluptatem excepturi temporibus quos rerum fugiat error itaque fugit perferendis nam. Similique atque nesciunt non accusamus quidem.'
	return (
		<HeroContainer className="h-min-screen text-left">
			<Title title={title} />
			<div className="px-12">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
					<Cards description={desc1} />
					<Cards description={desc1} />
					<Cards description={desc1} />
				</div>
			</div>
		</HeroContainer>
	)
}

export default Services

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Image});
  min-height: 100vh;
  background-position: center;
  background-size: cover;

`;