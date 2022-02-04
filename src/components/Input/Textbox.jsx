const Textbox = ({ className, name, placeholder, value, onChange }) => {
  return (
    <>
      <input
        type="text"
        className={className ? className : "form__input"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        autoCorrect="off"
      />
    </>
  );
};

export default Textbox;
