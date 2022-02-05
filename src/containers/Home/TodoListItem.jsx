import { Button } from '../../components';
import withToggler from '../../hoc/withToggler';

const TodoListItem = ({ todo, toggle, deleteTodo, updateTodo }) => {
  const { id, text, isMarked } = todo;
  const icon = isMarked ? 'ri-check-line' : undefined;

  const deleteHandler = () => deleteTodo(id);
  const updateHandler = (obj) => updateTodo(id, obj);

  return (
    <>
      <Button.Icon
        className='item__marker'
        icon={icon}
        onClick={() => updateHandler({ isMarked: !isMarked })}
      />
      <span className='item__text'>{text}</span>
      <div className='item__cta'>
        <Button.Icon
          className='cta__delete'
          icon='ri-delete-bin-line'
          onClick={deleteHandler}
        />
        <Button.Icon className='cta__edit' icon='ri-edit-line' onClick={toggle} />
      </div>
    </>
  );
};

export default withToggler(TodoListItem);
