import { Component } from 'react';
import { Button, Input } from '../../components';

class Form extends Component {
  render() {
    const { name } = this.props;

    return (
      <form className={`${name}__form`}>
        <Input.Text name='text' placeholder='What do you want to do?' />
        <div className='form__cta'>
          <Button.Plain className='cta__cancel' text='Cancel' />
          <Button.Plain type='submit' className='cta__save' text='Save' />
        </div>
      </form>
    );
  }
}

export default Form;
