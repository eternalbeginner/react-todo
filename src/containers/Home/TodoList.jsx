import { List } from '../../components';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos = [
    {
      id: 1,
      text: 'lol'
    }
  ];

  return (
    <section className='todo'>
      <List items={todos} name='todo'>
        {(todo) => <TodoListItem />}
      </List>
    </section>
  );
};

export default TodoList;
