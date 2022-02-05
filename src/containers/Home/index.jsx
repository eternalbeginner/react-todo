import { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <TodoList />
        <Footer />
      </>
    );
  }
}

export default Home;
