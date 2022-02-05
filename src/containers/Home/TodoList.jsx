import { List } from '../../components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <section className='todo'>
      <List items={todos} name='todo'>
        {(todo) => (
          <TodoListItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        )}
      </List>
    </section>
  );
};

export default TodoList;
