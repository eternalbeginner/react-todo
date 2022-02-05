import { Component, createRef } from 'react';
import { Button, Input } from '../../components';

const defaultValues = {
  text: ''
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        text: ''
      }
    };

    this.input = createRef();
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  }

  submitHandler(event) {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { values } = this.state;

    onSubmit(values);

    this.setState({ values: defaultValues }, () => {
      this.input.current.focus();
      this.props.mode &&
        this.props.mode === 'update' &&
        this.props.hideForm &&
        this.props.hideForm();
    });
  }

  componentDidMount() {
    if (this.props.defaultValues) {
      const { defaultValues } = this.props;

      this.setState((prevState) => ({
        values: { ...prevState.values, ...defaultValues }
      }));
    }

    this.input.current.focus();
  }

  componentWillUnmount() {
    document.querySelector('form').removeEventListener('submit', this.submitHandler);
    document.querySelector('input').removeEventListener('change', this.changeHandler);
  }

  render() {
    const { name, hideForm } = this.props;
    const { values } = this.state;

    return (
      <form className={`${name}__form`} onSubmit={this.submitHandler}>
        <Input.Text
          name='text'
          placeholder='What do you want to do?'
          ref={this.input}
          value={values.text}
          onChange={this.changeHandler}
        />
        <div className='form__cta'>
          <Button.Plain className='cta__cancel' text='Cancel' onClick={hideForm} />
          <Button.Plain type='submit' className='cta__save' text='Save' />
        </div>
      </form>
    );
  }
}

export default Form;
