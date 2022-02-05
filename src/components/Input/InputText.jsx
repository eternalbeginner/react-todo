import { forwardRef } from 'react';
import Wrapper from './Wrapper';

const InputText = forwardRef(function InputText(
  { id, label, name, placeholder, value, onChange },
  ref
) {
  return (
    <Wrapper>
      {label && (
        <label htmlFor={id} className='group__label'>
          {label}
        </label>
      )}
      <input
        type='text'
        id={id}
        className='group__input'
        name={name}
        placeholder={placeholder}
        ref={ref}
        value={value}
        autoComplete='off'
        autoCorrect='off'
        onChange={onChange}
      />
    </Wrapper>
  );
});

InputText.defaultProps = {
  placeholder: 'Type here...',
  value: '',
  onChange: () => {}
};

export default InputText;
