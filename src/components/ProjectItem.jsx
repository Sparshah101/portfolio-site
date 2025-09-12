import { motion } from 'framer-motion';
export const ProjectItem = ({
	image,
	title,
	description,
	technologies,
	sources,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			className="project-item"
		>
			<div className="image">
				<img loading="lazy" src={image} alt="project image" />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<ul className="technologies">
				{technologies.map((tech, i) => {
					return (
						<li key={i}>
							<div>{tech}</div>
						</li>
					);
				})}
			</ul>
			<ul className="sources">
				{Object.keys(sources).map((key) => {
					return (
						<li key={key}>
							<a target="_blank" href={sources[key]}>
								{key}
							</a>
						</li>
					);
				})}
			</ul>
		</motion.div>
	);
};
