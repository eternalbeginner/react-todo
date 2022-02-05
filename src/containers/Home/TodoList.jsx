import { List } from '../../components';
import Form from './Form';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <section className='todo'>
      <List items={todos} name='todo'>
        {(todo) => {
          const submitHandler = (obj) => updateTodo(todo.id, obj);

          return (
            <TodoListItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}>
              {(toggle) => (
                <Form
                  mode='update'
                  hideForm={toggle}
                  onSubmit={submitHandler}
                  defaultValues={{
                    text: todo.text
                  }}
                />
              )}
            </TodoListItem>
          );
        }}
      </List>
    </section>
  );
};

export default TodoList;
