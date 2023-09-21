import PropTypes from "prop-types";
import classes from "./Title.module.scss";

export const Title = ({ children, ...props }) => {
  return (
    <h2 className={classes.title} {...props}>
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};
