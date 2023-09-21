import PropTypes from "prop-types";
import classes from "./SideBar.module.scss";

export const SideBar = ({ ...props }) => {
  return (
    <div className={classes.container} {...props}>
      <h2>DAYRY APP</h2>
      <div>Comment whit no sense</div>
    </div>
  );
};

SideBar.propTypes = {};
