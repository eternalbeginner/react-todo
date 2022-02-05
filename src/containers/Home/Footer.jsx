import { Button } from '../../components';
import withToggler from '../../hoc/withToggler';

const Footer = ({ toggle }) => {
  return (
    <footer className='footer'>
      <div className='footer__cta'>
        <Button.Plain className='cta__create' text='Add new todo' onClick={toggle} />
      </div>
    </footer>
  );
};

export default withToggler(Footer);
