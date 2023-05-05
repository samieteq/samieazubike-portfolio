const About = () => {
	return (
		<>
			<div id="about" className="grid grid-cols-12">
				<div className="col-start-2 col-span-10 mt-[200px] flex flex-col px-4 py-4 h-auto">
					<h1 className="z-20 text-black relative before:-bottom-1 font-bold text-6xl before:z-10 before:content-[''] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:absolute before:w-[170px] before:h-[7px] before:bottom-0 before:left-0  xs:max-sm:text-[40px] xs:max-sm:before:w-[130px] xs:max-sm:before:h-[5px]">
						About
					</h1>
					<p className="text-[20px] mt-3">
						I am a life long learning, determined and
						passion-driven Software Engineer, building Tech
						Communities around Tech Products and increasing
						engagement through user adoption by working closely with
						the Marketing, Product, and Engineering Team to come up
						with a clear-cut strategy to level-up user onboarding. I
						have special interest in back-end program development
						using Java and Javascript. Experienced in designing
						interfaces,developing, testing and debugging codes. At
						the moment i am building projects with Springboot and
						React
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
