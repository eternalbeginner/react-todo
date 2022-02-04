import Base from "./Base";

const Icon = ({ type, name, icon, text, onClick }) => {
  return (
    <>
      <Base type={type} name={name} onClick={onClick}>
        <i className={`button__icon ${icon}`}></i>
        {text && <span className={`button__text`}>{text}</span>}
      </Base>
    </>
  );
};

export default Icon;
