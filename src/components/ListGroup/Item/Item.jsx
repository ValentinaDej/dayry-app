import PropTypes from "prop-types";

import { Button } from "../../../shared/Button/Button";

import classes from "./Item.module.scss";

export const Item = ({ name, ...props }) => {
  return (
    <li className={`${classes[`list-group-item`]}`} {...props}>
      {name}
      <Button mode={"outline-danger"}>Delete</Button>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.string,
};
