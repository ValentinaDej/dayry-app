import PropTypes from "prop-types";
import classes from "./Form.module.scss";

export const Form = ({ children, onSubmit, ...props }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};
