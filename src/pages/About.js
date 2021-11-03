import React from 'react'
import Title from '../components/Title'
import Image from '../images/about.jpg';
import ImageTwo from '../images/ceo.png';
import styled from 'styled-components';
import  '../css/About.css';

const About = () => {
	const title = 'About'
	return (
		<HeroContainer className="h-min-screen text-left ">
			<Title title={title} />
			<div className="px-6">
				<div className="mt-4">
					<Box className="sm:ml-24 mt-24">
						<div className="flex flex-col sm:flex-row">
							<img className="float-image shadow-xl" src={ImageTwo} alt="" />
							<div className="sm:-ml-12 mt-3 sm:mt-0">
								<h1 className="text-3xl font-bold text-black">Lorem Impsum</h1>
								<p className="mt-6">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae officiis, assumenda quis maiores enim voluptas obcaecati expedita sequi consequuntur unde atque voluptates, facere voluptate inventore aliquam repudiandae, fugiat commodi vero?
								</p>
								<p className="mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate, porro libero ipsam assumenda reprehenderit ab nemo alias, labore rerum et voluptatum quae, veniam facilis nam necessitatibus quam voluptate asperiores.</p>
							</div>
						</div>
						<div className="sm:-mt-16 mt-3 sm:mt-0">
							<p><span className="text-3xl font-bold">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Quasi nesciunt deserunt est labore unde harum eaque eius omnis modi! Autem sequi itaque non. Facere voluptas veniam dicta, explicabo suscipit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quibusdam facere nemo similique aliquam earum. Dolor earum neque, quo dicta eveniet officiis perferendis sapiente itaque quis cupiditate ipsa! Debitis, dolore.</p>
						</div>
						
					</Box>
				</div>
			</div>
		</HeroContainer>
	)
}

export default About

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Image});
  min-height: 100vh;
  background-position: center;
  background-size: cover;

`;

const Box = styled.div`
	background: #86c5ee;
	padding: 20px;
`;

