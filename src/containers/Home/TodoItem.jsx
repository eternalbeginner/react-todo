import withToggler from '../../hoc/withToggler';

const TodoItem = ({ todo, toggle: toggleForm, onDelete }) => {
	return (
		<div className='todo__item'>
			<button type='button' className='item__marker'>
				<i className='ri-check-line'></i>
			</button>
			<span className='item__text'>{todo.text}</span>
			<div className='item__cta'>
				<button type='button' className='cta__edit' onClick={toggleForm}>
					<i className='ri-edit-line'></i>
				</button>
				<button type='button' className='cta__delete' onClick={onDelete}>
					<i className='ri-delete-bin-line'></i>
				</button>
			</div>
		</div>
	);
};

export default withToggler(TodoItem);
