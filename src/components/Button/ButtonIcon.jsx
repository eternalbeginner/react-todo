import Wrapper from './Wrapper';
import { Icon } from '../../components';

const ButtonIcon = ({ type, name, className, icon, text, onClick }) => {
  return (
    <Wrapper type={type} name={name} className={className} onClick={onClick}>
      <Icon.Regular name={icon} className='button__icon' />
      {text && <span className='button__text'>{text}</span>}
    </Wrapper>
  );
};

export default ButtonIcon;
