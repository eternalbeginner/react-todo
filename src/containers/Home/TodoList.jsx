import { useContext } from 'react';
import TodosContext from '../../context/todosContext';

import { List } from '../../components';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <section className='todo'>
      <List items={todos} name='todo'>
        {(todo) => {
          return <TodoListItem todo={todo} />;
        }}
      </List>
    </section>
  );
};

export default TodoList;
