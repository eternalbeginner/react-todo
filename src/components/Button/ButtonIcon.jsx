import Wrapper from './Wrapper';

const ButtonIcon = ({ type, name, className, icon, text, onClick }) => {
  return (
    <Wrapper type={type} name={name} className={className} onClick={onClick}>
      <i className={`button__icon ${icon}`}></i>
      {text && <span className='button__text'>{text}</span>}
    </Wrapper>
  );
};

export default ButtonIcon;
