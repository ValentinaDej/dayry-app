import PropTypes from "prop-types";
import classes from "./Input.module.scss";

export const Input = ({
  mode = "input",
  type = "text",
  placeholder,
  ...props
}) => {
  switch (mode) {
    case "input":
      return (
        <input
          type={type}
          placeholder={placeholder}
          className={`${classes[`form-control`]}`}
          {...props}
        />
      );
    case "textarea":
      return (
        <textarea
          placeholder={placeholder}
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
