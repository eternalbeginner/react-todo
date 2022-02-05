import { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'hello world',
          isMarked: false
        }
      ]
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <>
        <Header />
        <TodoList todos={todos} />
        <Footer />
      </>
    );
  }
}

export default Home;
