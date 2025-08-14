import { ProjectItem } from './ProjectItem';
import './projects.css';
export const Projects = () => {
	const projectItems = [
		{
			image: 'https://github.com/OpsEclipse/vaultify-frontend/raw/main/public/vaultify.png',
			title: 'Vaultify',
			description:
				'Don’t have Spotify Premium? Tired of ads and limited skips? Vaultify is your perfect fix, follow the tutorial and start listening your way!',
			technologies: ['ExpressJS', 'ReactJS', 'MongoDB', 'AWS'],
			sources: {
				demo: '',
				tutorial: '',
				'source (backend)': '',
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
			],
			sources: {
				source: 'https://github.com/OpsEclipse/To-do-react',
				website: 'https://to-do-react-1.onrender.com/#/login',
			},
		},
	];
	return (
		<section  className="project-section">
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
