import { useState } from 'react';
import './experience.css';
import { ExperienceObj } from './ExperienceObj';
export const Experience = () => {
	const [selected, setSelected] = useState('');
	const experiences_edu = [
		{
			title: 'University of Waterloo',
			image: 'https://tse2.mm.bing.net/th/id/OIP.b62taMCWhOKX39al7617lAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
			start: 'Sept 2025',
			end: 'Jun 2030 (expected)',
			position:
				'Bachelor of Applied Science in Systems Design Engineering',
			points: [],
		},
		{
			title: 'Westwood Community High School',
			image: 'https://westwood.fmpsdschools.ca/uploads/7688/untitleddesign43/1711644232-575w_untitleddesign43.png',
			start: 'Sept 2019',
			end: 'Jun 2025',
			points: [],
		},
	];
	const experiences_work = [
		{
			title: 'VEX Robotics',
			position: 'Lead Programmer of 221X Rocket',
			image: 'https://www.fmpsdschools.ca/uploads/9f58614aa27049fe9a9218b58c385f9e/1740769563-940w_9f58614aa27049fe9a9218b58c385f9e.jpg',
			start: 'Sept 2022',
			end: 'May 2025',
			points: [
				'2025 Alberta VEX provincial champion 🏆',
				'developed an award-winning odometry and PID-based navigation to execute complex autonomous routines.',
				'Shattered the provincial autonomous win-point record with 6 points (double the second-place score) helping secure the 2025 Alberta VEX Excellence Award.',
			],
		},
		{
			title: 'Fort McMurray Sanatan Mandir',
			position: 'Web Development Assistant',
			image: 'https://tse3.mm.bing.net/th/id/OIP.F9tR0BamWmBUepg_munvHwHaHa?rs=1&pid=ImgDetMain&o=7&rm=33',
			start: 'Sept 2023',
			end: 'Jan 2024',
			points: [
				'Assisted in maintaining and updating the mandir’s website to improve user accessibility and keep content current.',
				'Supported development tasks including layout design, content integration, and bug fixes using HTML, CSS, and JavaScript',
				'Collaborated with senior developers and temple leadership to ensure the site met community needs and reflected cultural values.',
			],
		},
	];
	return (
		<section className="experience" id='experience'>
			<div className="toggle-btn">
				<button
					className={
						selected !== 'education'
							? 'right-btn active'
							: 'right-btn'
					}
					onClick={() => setSelected('')}
				>
					Experience
				</button>
				<button
					className={
						selected === 'education'
							? 'left-btn active'
							: 'left-btn'
					}
					onClick={() => setSelected('education')}
				>
					Education
				</button>
			</div>
			<div className="real-part">
				{selected === 'education'
					? experiences_edu.map((experience, i) => {
							return (
								<ExperienceObj
									title={experience.title}
									image={experience.image}
									start={experience.start}
									end={experience.end}
									position={
										experience.position ||
										undefined
									}
									points={experience.points}
									key={i}
								/>
							);
					  })
					: experiences_work.map((experience) => {
							return (
								<ExperienceObj
									title={experience.title}
									image={experience.image}
									start={experience.start}
									end={experience.end}
									position={
										experience.position ||
										undefined
									}
									points={experience.points}
								/>
							);
					  })}
			</div>
		</section>
	);
};
