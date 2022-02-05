import { Button } from '../../components';

const TodoListItem = ({ todo, deleteTodo, updateTodo }) => {
  const { id, text, isMarked } = todo;
  const icon = isMarked ? 'ri-check-line' : undefined;

  const deleteHandler = () => deleteTodo(id);
  const updateHandler = (obj) => updateTodo(id, obj);
  const submitHandler = (obj) => updateHandler(obj);

  return (
    <>
      <Button.Icon className='item__marker' icon={icon} />
      <span className='item__text'>{text}</span>
      <div className='item__cta'>
        <Button.Icon
          className='cta__delete'
          icon='ri-delete-bin-line'
          onClick={deleteHandler}
        />
        <Button.Icon className='cta__edit' icon='ri-edit-line' />
      </div>
    </>
  );
};

export default TodoListItem;
