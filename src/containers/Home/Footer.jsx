import { useContext, useState } from 'react';
import TodosContext from '../../context/todosContext';
import { Button } from '../../components';
import Form from './Form';

const Footer = () => {
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const { createTodo } = useContext(TodosContext);

  return (
    <footer className='footer'>
      {isDisplayForm ? (
        <Form
          hideForm={() => setIsDisplayForm(false)}
          onSubmit={(obj) => createTodo(obj)}
        />
      ) : (
        <div className='footer__cta'>
          <Button.Plain
            className='cta__create'
            text='Add new todo'
            onClick={() => setIsDisplayForm(true)}
          />
        </div>
      )}
    </footer>
  );
};

export default Footer;
