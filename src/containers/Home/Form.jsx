import { Component } from 'react';

class Form extends Component {
  render() {
    const { name } = this.props;

    return (
      <form className={`${name}__form`}>
        <input type='text' className='form__input' />
        <div className='form__cta'>
          <button type='button' className='cta__cancel'>
            Cancel
          </button>
          <button type='submit' className='cta__save'>
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
