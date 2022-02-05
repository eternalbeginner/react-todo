import Form from './Form';

const Footer = () => {
  return (
    <footer className='footer'>
      <Form name='footer' />
      <div className='footer__cta'>
        <button type='button' className='cta__create'>
          Add new todo
        </button>
      </div>
    </footer>
  );
};

export default Footer;
