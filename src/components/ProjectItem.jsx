export const ProjectItem = ({
	image,
	title,
	description,
	technologies,
	sources,
}) => {
	return (
		<div className="project-item">
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
		</div>
	);
};
