import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Todo from './Todo';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
		};

		this.createTodo = this.createTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
	}

	createTodo(todo) {
		if (!todo) {
			return;
		}

		this.setState((prevState) => {
			const now = new Date().getTime();

			return {
				todos: [
					...prevState.todos,
					{
						id: uuid(),
						isMarked: false,
						createdAt: now,
						updatedAt: now,
						...todo,
					},
				],
			};
		});
	}

	deleteTodo(todoId) {
		this.setState((prevState) => {
			return {
				todos: [...prevState.todos].filter(({ id }) => id !== todoId),
			};
		});
	}

	updateTodo(todoId, todo) {
		this.setState((prevState) => {
			const todos = [...prevState.todos];
			const index = todos.findIndex(({ id }) => id === todoId);

			if (index >= 0) {
				todos[index] = {
					...todos[index],
					...todo,
					updatedAt: new Date().getTime(),
				};
			}

			return { todos };
		});
	}

	render() {
		const { todos } = this.state;
		return (
			<div>
				<Header />
				<Todo
					todos={todos}
					deleteTodoHandler={this.deleteTodo}
					updateTodoHandler={this.updateTodo}
				/>
				<Footer>
					{({ toggle }) => {
						return (
							<Form
								onSubmit={(obj) => this.createTodo(obj)}
								toggleForm={toggle}
							/>
						);
					}}
				</Footer>
			</div>
		);
	}
}

export default Home;
