import PropTypes from "prop-types";
import classes from "./Button.module.scss";
import { memo } from "react";

export const Button = memo(({ children, type, onClick, mode, ...props }) => {
  const buttonMode = mode || "primary";

  return (
    <button
      type={type || "button"}
      className={`${classes.btn} ${classes[`btn-${buttonMode}`]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit"]),
  mode: PropTypes.oneOf(["primary", "info", "outline-danger"]),
  onClick: PropTypes.func,
};
