import PropTypes from "prop-types";
import "./Button.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ label, variant }) => {
  let buttonClass;

  switch (variant) {
    case "primary":
      buttonClass = "button-primary";
      break;
    case "secondary":
      buttonClass = "button-secondary";
      break;
    case "download-primary":
      buttonClass = "download-primary";
      break;
    case "download-secondary":
      buttonClass = "download-secondary";
      break;
    default:
      buttonClass = "";
  }

  return <button className={buttonClass}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "download-primary",
    "download-secondary",
  ]).isRequired,
};

export default Button;
