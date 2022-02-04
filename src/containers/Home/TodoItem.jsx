import { Button } from '../../components';
import withToggler from '../../hoc/withToggler';

const TodoItem = ({ todo, onDelete: deleteTodo, toggle: toggleForm }) => {
	return (
		<div className='todo__item'>
			<Button.Icon type='button' name='item__marker' icon='ri-check-line' />
			<span className='item__text'>{todo.text}</span>
			<div className='item__cta'>
				<Button.Icon
					type='button'
					name='cta__edit'
					icon='ri-edit-line'
					onClick={toggleForm}
				/>
				<Button.Icon
					type='button'
					name='cta__delete'
					icon='ri-delete-bin-line'
					onClick={deleteTodo}
				/>
			</div>
		</div>
	);
};

export default withToggler(TodoItem);
