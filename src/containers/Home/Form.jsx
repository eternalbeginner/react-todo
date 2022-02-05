import { Component } from 'react';
import { Button } from '../../components';

class Form extends Component {
  render() {
    const { name } = this.props;

    return (
      <form className={`${name}__form`}>
        <input type='text' className='form__input' />
        <div className='form__cta'>
          <Button.Plain className='cta__cancel' text='Cancel' />
          <Button.Plain type='submit' className='cta__save' text='Save' />
        </div>
      </form>
    );
  }
}

export default Form;
