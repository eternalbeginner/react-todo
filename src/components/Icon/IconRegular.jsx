const IconRegular = ({ name, type, className }) => {
  className = `${className ? className : ''} ${name} ri-1x`.trimStart();
  return <i className={className}></i>;
};

IconRegular.defaultProps = {
  type: 'line'
};

export default IconRegular;
