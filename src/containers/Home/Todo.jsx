import Form from './Form';
import TodoItem from './TodoItem';

const Todo = ({ todos, deleteTodoHandler, updateTodoHandler }) => {
	return (
		<section className='todo'>
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDelete={() => deleteTodoHandler(todo.id)}
						onMark={() =>
							updateTodoHandler(todo.id, { isMarked: !todo.isMarked })
						}
					>
						{({ toggle }) => {
							return (
								<Form
									mode='update'
									todoText={todo.text}
									onSubmit={(obj) => updateTodoHandler(todo.id, obj)}
									toggleForm={toggle}
								/>
							);
						}}
					</TodoItem>
				);
			})}
		</section>
	);
};

export default Todo;
