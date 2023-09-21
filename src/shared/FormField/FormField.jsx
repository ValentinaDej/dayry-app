import PropTypes from "prop-types";
import classes from "./FormField.module.scss";

export const FormField = ({ children, ...props }) => {
  return (
    <div className={`${classes[`form-field`]}`} {...props}>
      {children}
    </div>
  );
};

FormField.propTypes = {
  children: PropTypes.node,
};
