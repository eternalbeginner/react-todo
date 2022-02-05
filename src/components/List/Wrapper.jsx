const Wrapper = ({ name, children }) => {
  return <ul className={`list ${name}__list`}>{children}</ul>;
};

Wrapper.defaultProps = {
  name: 'list'
};

export default Wrapper;
