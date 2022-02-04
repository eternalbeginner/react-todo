const Title = ({ name, heading, description }) => {
	return (
		<div className={`${name}__title`}>
			<h3 className='title__h'>{heading}</h3>
			{description && <p className='title__p'>{description}</p>}
		</div>
	);
};

Title.defaultProps = {
	name: 'title',
};

export default Title;
