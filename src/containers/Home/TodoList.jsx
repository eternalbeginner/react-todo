import { List } from '../../components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <section className='todo'>
      <List items={todos} name='todo'>
        {(todo) => <TodoListItem todo={todo} />}
      </List>
    </section>
  );
};

export default TodoList;
