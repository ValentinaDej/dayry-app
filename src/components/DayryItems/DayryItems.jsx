import PropTypes from "prop-types";

import { BoxShadow } from "../../shared/BoxShadow/BoxShadow";
import { ListGroup } from "../ListGroup/ListGroup";

export const DayryItems = ({ ...props }) => {
  return (
    <BoxShadow>
      <ListGroup />
    </BoxShadow>
  );
};

DayryItems.propTypes = {};
