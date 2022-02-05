import { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

import { createTodo, deleteTodo, updateTodo } from './Model';

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

    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }

  create(todo) {
    this.setState((prevState) => ({
      todos: createTodo([...prevState.todos], todo)
    }));
  }

  delete(todoId) {
    this.setState((prevState) => ({
      todos: deleteTodo([...prevState.todos], todoId)
    }));
  }

  update(todoId, todo) {
    this.setState((prevState) => ({
      todos: updateTodo([...prevState.todos], todoId, todo)
    }));
  }

  render() {
    const { todos } = this.state;

    return (
      <>
        <Header />
        <TodoList todos={todos} deleteTodo={this.delete} updateTodo={this.update} />
        <Footer createTodo={this.create} />
      </>
    );
  }
}

export default Home;
