import PropTypes from "prop-types";
import classes from "./BoxShadow.module.scss";

export const BoxShadow = ({ children, ...props }) => {
  return (
    <div className={classes.box} {...props}>
      {children}
    </div>
  );
};

BoxShadow.propTypes = {
  children: PropTypes.node,
};
