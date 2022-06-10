import PropTypes from "prop-types";

const Button = ({ text, color, onCLick }) => {
  return (
    <button
      onClick={onCLick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
