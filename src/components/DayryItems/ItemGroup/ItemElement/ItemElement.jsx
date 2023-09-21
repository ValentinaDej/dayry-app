import PropTypes from "prop-types";

import { Button } from "../../../../shared/Button/Button";

import classes from "./ItemElement.module.scss";

export const ItemElement = ({
  name,
  index,
  onDelete,
  isActive,
  commentCount,
  ...props
}) => {
  return (
    <li
      className={`${classes[`group-item`]} ${isActive ? classes.active : ""}`}
      {...props}
    >
      <span className={classes.name}>{name}</span>
      <span className={classes.badge}>{commentCount}</span>
      <div className={`${classes[`button-container`]}`}>
        <Button mode={"outline-danger"} onClick={(e) => onDelete(index, e)}>
          Delete
        </Button>
      </div>
    </li>
  );
};

ItemElement.propTypes = {
  name: PropTypes.string,
};
