import React, {useState} from 'react'
import styled from 'styled-components';
import Image from '../images/bg.jpg';
import Title from '../components/Title'

import TimePicker from 'react-time-picker';

const Book = () => {
	const title = "Book A Schedule"
	const today = new Date();
	const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	const [value, onChange] = useState(time)

	return (
		<HeroContainer className="h-min-screen text-left">
			<Title title={title} />
			<div className="mt-8 px-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<ColumnOne className="p-4 w-full md:w-3/4">
						<div>
							<h1 className="text-black text-3xl uppercase font-bold">Day</h1>
							<div className="px-4 mt-4">
								<div className="flex justify-between flex-wrap">
									<div>
										<div>
											<label class="inline-flex items-center">
												<input type="checkbox" />
												<span class="ml-2 uppercase font-bold">Monday</span>
											</label>
										</div>
										<div>
											<label class="inline-flex items-center">
												<input type="checkbox"/>
												<span class="ml-2 uppercase font-bold">Tuesday</span>
											</label>
										</div>
										<div>
											<label class="inline-flex items-center">
												<input type="checkbox"/>
												<span class="ml-2 uppercase font-bold">Wednesday</span>
											</label>
										</div>
										<div>
											<label class="inline-flex items-center">
												<input type="checkbox"/>
												<span class="ml-2 uppercase font-bold">Thursday</span>
											</label>
										</div>
									</div>

									<div>
										<div>
											<label class="inline-flex items-center">
												<input type="checkbox"/>
												<span class="ml-2 uppercase font-bold">Friday</span>
											</label>
										</div>
										<div>
											<label class="inline-flex items-center">
												<input type="checkbox"/>
												<span class="ml-2 uppercase font-bold">Saturday</span>
											</label>
										</div>
										<div>
											<label class="inline-flex items-center">
												<input type="checkbox"/>
												<span class="ml-2 uppercase font-bold">Sunday</span>
											</label>
										</div>
									</div>
									
		
								</div>
							</div>
						</div>

						<div className="mt-5">
							<h1 className="text-black text-3xl uppercase font-bold">Time</h1>
								<div className="px-4 mt-4">
									<TimePicker
										onChange={onChange}
										value={value}
									/>
								</div>
						</div>
					</ColumnOne>

					<div className="w-full flex justify-end">
						<ColumnTwo className="p-6 w-full sm:w-1/2 mr-0 " >
							<div>
								<h1 className="text-black text-3xl uppercase font-bold text-center">Choose your won schedule</h1>
								<p className="mt-4">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, illo harum? Alias ullam debitis, eveniet perferendis, amet magni earum hic nobis quisquam quibusdam ut repellat, cupiditate ipsa animi quis cumque!
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem debitis natus reprehenderit sapiente esse iure nulla. Voluptas maxime, iure illo molestiae architecto eos porro, voluptatum enim harum sed quidem.
								</p>
							</div>
						</ColumnTwo>
					</div>
					
				</div>
			</div>
		</HeroContainer>
	)
}

export default Book

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Image});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
`;

const ColumnOne = styled.div`
  background: #e4e1c0;
`;

const ColumnTwo = styled.div`
  background: #bad5e8;
`;
