import PropTypes from "prop-types";
import classes from "./Input.module.scss";

export const Input = ({ mode = "input", value, type = "text", ...props }) => {
  switch (mode) {
    case "input":
      return (
        <input
          type={type}
          value={value}
          className={`${classes[`form-control`]}`}
          {...props}
        />
      );
    case "textarea":
      return (
        <textarea
          value={value}
          className={`${classes[`form-control`]}`}
          {...props}
        />
      );
    default:
      return <></>;
  }
};

Input.propTypes = {
  mode: PropTypes.oneOf(["input", "textarea"]),
  type: PropTypes.oneOf(["text", "color"]),
  placeholder: PropTypes.string,
};
