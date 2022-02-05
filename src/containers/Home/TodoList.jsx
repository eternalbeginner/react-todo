import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <section className='todo'>
      <ul className='todo__list'>
        <TodoListItem />
      </ul>
    </section>
  );
};

export default TodoList;
