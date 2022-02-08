import { useState } from 'react';
import { create, remove, update } from './Model';
import { TodosProvider } from '../../context/todosContext';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  function createTodo(todo) {
    setTodos((prevTodos) => create(prevTodos, todo));
  }

  function removeTodo(todoId) {
    setTodos((prevTodos) => remove(prevTodos, todoId));
  }

  function updateTodo(todoId, todo) {
    setTodos((prevTodos) => update(prevTodos, todoId, todo));
  }

  return (
    <>
      <TodosProvider value={{ todos, createTodo, removeTodo, updateTodo }}>
        <Header />
        <TodoList />
        <Footer />
      </TodosProvider>
    </>
  );
};

export default Home;
