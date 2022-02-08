import { useContext, useState } from 'react';
import TodosContext from '../../context/todosContext';
import { Button } from '../../components';
import Form from './Form';

const TodoListItem = ({ todo }) => {
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const { removeTodo, updateTodo } = useContext(TodosContext);

  return isDisplayForm ? (
    <Form
      mode='update'
      defaultValues={{ text: todo.text }}
      hideForm={() => setIsDisplayForm(false)}
      onSubmit={(obj) => updateTodo(todo.id, obj)}
    />
  ) : (
    <>
      <Button.Icon
        className='item__marker'
        icon={todo.isMarked ? 'ri-check-line' : undefined}
        onClick={() => updateTodo(todo.id, { isMarked: !todo.isMarked })}
      />
      <span className='item__text'>{todo.text}</span>
      <div className='item__cta'>
        <Button.Icon
          className='cta__delete'
          icon='ri-delete-bin-line'
          onClick={() => removeTodo(todo.id)}
        />
        <Button.Icon
          className='cta__edit'
          icon='ri-edit-line'
          onClick={() => setIsDisplayForm(true)}
        />
      </div>
    </>
  );
};

export default TodoListItem;
