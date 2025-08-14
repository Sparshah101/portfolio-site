export const ExperienceObj = ({
	image,
	start,
	title,
	end,
	position,
	points,
}) => {
	return (
		<div className="whole-container">
			<img src={image} alt="image" />
			<div className="details">
				<p
					style={{ margin: '0', fontSize: '12px' }}
				>{`${start} - ${end}`}</p>
				<h3>{title}</h3>
				{position ? (
					<p style={{ margin: '0', fontSize: '14px' }}>
						{position}
					</p>
				) : null}

				<ul>
					{points.map((point, i) => {
						return <li key={i}>{point}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};
