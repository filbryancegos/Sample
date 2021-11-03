import React from 'react'
import Title from '../components/Title'
import styled from 'styled-components';
import Image from '../images/bg.jpg';
import ImageOne from '../images/contact.jpg';
import ImageTwo from '../images/about.jpg';
import {Carousel} from '3d-react-carousal';

const Home = () => {
	const title = 'Home'
	let slides = [
		<img  src={ImageOne} alt="1" />,
		<img  src={ImageOne} alt="2" />,
		<img  src={ImageOne} alt="1" />,
		<img  src={ImageOne} alt="2" />,
		 ];
	return (
		<HeroContainer className="h-min-screen text-left">
			<div>
				<Title title={title} />
				<div className="mt-8 px-16">
					<div class="mt-8">
						<Carousel slides={slides}/>
					</div>
					<HeroDesc className="p-4 mt-12 opacity-90">
						<div className="mb-8 p-4">
							<HeroText className="p-2">
								<h1 className="text-5xl text-black font-bold">lorem <br/> ipsume</h1>
							</HeroText>
								<p className="-mx-3.5">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque maiores, aspernatur delectus est mollitia nihil tenetur laudantium! Minima, animi deleniti? Obcaecati omnis reprehenderit accusamus libero? Officia et dolorum aut quod?
								</p>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolor assumenda optio quo nobis aperiam culpa laboriosam sed dolores beatae, animi voluptate asperiores? Repudiandae ipsa illo quaerat ad iure quo!</p>
							</div>
					
					</HeroDesc>
				</div>
			</div>
		</HeroContainer>
	)
}

export default Home

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Image});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
`;

const HeroDesc = styled.div`
  background-color: #8bbce4;
`;

const HeroText = styled.div`
  width: 200px;
  position: relative;
  top: -50px;
  left: -50px;
  float: left;
  background-color: #5ea9e2;
  opacity: 0.9
`;