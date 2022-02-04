import Base from "./Base";

const Plain = ({ type, name, text, onClick }) => {
  return (
    <>
      <Base type={type} name={name} onClick={onClick}>
        <span className={`button__text`}>{text}</span>
      </Base>
    </>
  );
};

export default Plain;
