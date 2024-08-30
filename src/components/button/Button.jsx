import "./Button.scss";

const Button = ({ className, onClick, type, children }) => {
  return (
    <button className={`${className}__btn btn`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
export default Button;
