const TodoListItem = () => {
  return (
    <li className='list__item'>
      <button type='button' className='item__marker'>
        <i className='ri-check-line'></i>
      </button>
      <span className='item__text'>I want to do something today!</span>
      <div className='item__cta'>
        <button type='button' className='cta__delete'>
          <i className='ri-delete-bin-line'></i>
        </button>
        <button type='button' className='cta__edit'>
          <i className='ri-edit-line'></i>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
