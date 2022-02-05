import { Button } from '../../components';

const TodoListItem = () => {
  return (
    <li className='list__item'>
      <Button.Icon className='item__marker' icon='ri-check-line' />
      <span className='item__text'>I want to do something today!</span>
      <div className='item__cta'>
        <Button.Icon className='cta__delete' icon='ri-delete-bin-line' />
        <Button.Icon className='cta__delete' icon='ri-edit-line' />
      </div>
    </li>
  );
};

export default TodoListItem;
