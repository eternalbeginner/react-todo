import Form from './Form';

const Footer = ({ createTodo }) => {
  const onSubmitHandler = (obj) => {
    createTodo(obj);
  };

  return (
    <footer className='footer'>
      <Form name='footer' onSubmit={onSubmitHandler} />
      <div className='footer__cta'>
        <button type='button' className='cta__create'>
          Add new todo
        </button>
      </div>
    </footer>
  );
};

export default Footer;
