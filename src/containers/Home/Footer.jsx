import withToggler from "../../hoc/withToggler";

const Footer = ({ toggle: toggleForm }) => {
  return (
    <footer className="footer">
      <button type="button" className="footer__invoker" onClick={toggleForm}>
        Add new todo
      </button>
    </footer>
  );
};

export default withToggler(Footer);
