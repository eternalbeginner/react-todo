import { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <h3>Todo App!</h3>
          <p>What do you want to do today?</p>
        </header>
        <section>
          <div>
            <button type='button'>
              <i className='ri-check-line'></i>
            </button>
            <span>I want to do something today!</span>
            <div>
              <button type='button'>
                <i className='ri-delete-bin-line'></i>
              </button>
              <button type='button'>
                <i className='ri-edit-line'></i>
              </button>
            </div>
          </div>
        </section>
        <footer>
          <form>
            <input type='text' />
            <div>
              <button type='button'>Cancel</button>
              <button type='submit'>Save</button>
            </div>
          </form>
          <button type='button'>Add new todo</button>
        </footer>
      </>
    );
  }
}

export default Home;
