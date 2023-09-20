import PropTypes from "prop-types";

import { Item } from "./Item/Item";

import classes from "./ListGroup.module.scss";

export const ListGroup = ({ ...props }) => {
  return (
    <ul className={`${classes[`list-group`]}`} {...props}>
      <Item name="Hello" />
      <Item name="Buy" />
    </ul>
  );
};

ListGroup.propTypes = {};
