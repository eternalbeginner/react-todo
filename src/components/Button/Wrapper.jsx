const Wrapper = ({ type, className, onClick, children }) => {
  className = `button ${className ? className : ''}`.trimEnd();

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Wrapper.defaultProps = {
  type: 'button',
  name: 'button__button',
  onClick: () => {}
};

export default Wrapper;
