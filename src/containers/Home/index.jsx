import { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <div className='header__title'>
            <h3 className='title_h'>Todo App!</h3>
            <p className='title_p'>What do you want to do today?</p>
          </div>
        </header>
        <section className='todo'>
          <ul className='todo__list'>
            <li className='list__item'>
              <button type='button' className='item__marker'>
                <i className='ri-check-line'></i>
              </button>
              <span className='item__text'>I want to do something today!</span>
              <div className='item__cta'>
                <button type='button' className='cta__delete'>
                  <i className='ri-delete-bin-line'></i>
                </button>
                <button type='button' className='cta__edit'>
                  <i className='ri-edit-line'></i>
                </button>
              </div>
            </li>
          </ul>
        </section>
        <footer className='footer'>
          <form className='footer__form'>
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
          <div className='footer__cta'>
            <button type='button' className='cta__create'>
              Add new todo
            </button>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
