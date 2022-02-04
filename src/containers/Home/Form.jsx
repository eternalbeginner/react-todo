import { Component, createRef } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			values: {
				text: '',
			},
		};

		this.form = createRef();
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onChangeHandler(event) {
		const { name, value } = event.target;

		this.setState((prevState) => {
			return {
				values: {
					...prevState.values,
					[name]: value,
				},
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();
		this.props.onSubmit(this.state.values);
		this.#_resetForm();
	}

	#_isUpdateMode() {
		return this.props.mode === 'update';
	}

	#_resetForm() {
		const values = {};

		for (const name in this.state.values) {
			values[name] = '';
		}

		this.setState({ values }, () => {
			this.#_isUpdateMode() && this.props.toggleForm();
		});
	}

	componentDidMount() {
		this.#_isUpdateMode() &&
			this.setState((prevState) => {
				return { values: { ...prevState.values, text: this.props.todoText } };
			});

		this.form.current[0].focus();
	}

	render() {
		const { values } = this.state;
		const { toggleForm } = this.props;

		return (
			<form
				className='footer__form'
				ref={this.form}
				onSubmit={this.onSubmitHandler}
			>
				<input
					type='text'
					className='form__input'
					name='text'
					value={values.text}
					autoComplete='off'
					autoCorrect='off'
					onChange={this.onChangeHandler}
				/>
				<div className='form__cta'>
					<button type='submit' className='cta__save'>
						Save
					</button>
					<button type='button' className='cta__cancel' onClick={toggleForm}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

Form.defaultProps = {
	mode: 'create',
};

export default Form;
