import { motion } from 'framer-motion';
export const ExperienceObj = ({
	image,
	start,
	title,
	end,
	position,
	points,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			className="whole-container"
		>
			
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
		</motion.div>
	);
};
