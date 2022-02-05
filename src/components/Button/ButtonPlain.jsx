import Wrapper from './Wrapper';

const ButtonPlain = ({ type, name, className, text, onClick }) => {
  return (
    <Wrapper type={type} name={name} className={className} onClick={onClick}>
      <span className='button__text'>{text}</span>
    </Wrapper>
  );
};

export default ButtonPlain;
