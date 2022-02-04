const Base = ({ type, name, onClick, children }) => {
	return (
		<button type={type} className={`button ${name}`} onClick={onClick}>
			{children}
		</button>
	);
};

Base.defaultProps = {
	onClick: () => {},
};

export default Base;
