import { Button } from '../../components';

const TodoListItem = ({ todo }) => {
  const { id, text, isMarked } = todo;
  const icon = isMarked ? 'ri-check-line' : undefined;

  return (
    <>
      <Button.Icon className='item__marker' icon={icon} />
      <span className='item__text'>{text}</span>
      <div className='item__cta'>
        <Button.Icon className='cta__delete' icon='ri-delete-bin-line' />
        <Button.Icon className='cta__delete' icon='ri-edit-line' />
      </div>
    </>
  );
};

export default TodoListItem;
