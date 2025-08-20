import { ProjectItem } from './ProjectItem';
import './projects.css';
export const Projects = () => {
	const projectItems = [
		{
			image: 'https://github.com/OpsEclipse/vaultify-frontend/raw/main/public/vaultify.png',
			title: 'Vaultify',
			description:
				'Don’t have Spotify Premium? Tired of ads and limited skips? Vaultify is your perfect fix, follow the tutorial and start listening your way!',
			technologies: [
				'ExpressJS',
				'ReactJS',
				'MongoDB',
				'AWS',
				'JavaScript',
			],
			sources: {
				demo: 'https://youtu.be/mCXQQ_RFFjw',
				tutorial: '',
				'source (backend)':
					'https://github.com/OpsEclipse/vaultify-backend',
			},
		},
		{
			image: 'https://github.com/OpsEclipse/To-do-react/raw/main/client/src/assets/to-do-ss.png',
			title: 'Global Task Manager',
			description:
				'A globally accessible, shared task list where users can add, remove, and mark tasks aswell as a clean, responsive UI for usability across devices.',
			technologies: [
				'ExpressJS',
				'ReactJS',
				'MongoDB',
				'Socket.io',
				'JavaScript',
			],
			sources: {
				source: 'https://github.com/OpsEclipse/To-do-react',
				website: 'https://to-do-react-1.onrender.com/#/login',
			},
		},
		{
			image: 'https://github.com/OpsEclipse/ChatKey/raw/main/assets/loginPage.png',
			title: 'Chat Key',
			description:
				'Lightweight messaging app with instant room creation and join-by-key feature, works on IOS and Android.',
			technologies: [
				'React Native',
				'NativeWind',
				'Firebase (Auth and Firestone)',
				'TypeScript',
			],
			sources: {
				source: 'https://github.com/OpsEclipse/ChatKey',
				'demo (IOS)':
					'https://www.youtube.com/shorts/DRrh8PuZnFk',
			},
		},
	];
	return (
		<section className="project-section">
			<h2>Projects</h2>
			<div className="projects">
				{projectItems.map((project, i) => (
					<ProjectItem
						image={project.image}
						title={project.title}
						description={project.description}
						technologies={project.technologies}
						sources={project.sources}
						key={i}
					/>
				))}
			</div>
		</section>
	);
};
