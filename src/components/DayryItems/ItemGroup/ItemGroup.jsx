import PropTypes from "prop-types";

import { ItemElement } from "./ItemElement/ItemElement";

import classes from "./ItemGroup.module.scss";

export const ItemGroup = ({
  items,
  onItemSelect,
  onDelete,
  commentNumber,
  commentCount,
}) => {
  return (
    <ul className={classes.group}>
      {items?.map((item, index) => (
        <ItemElement
          key={item.id}
          name={item.name}
          commentCount={item.comments.length}
          index={index}
          onDelete={onDelete}
          onClick={() => onItemSelect(item.id)}
          isActive={commentNumber === item.id}
        />
      ))}
    </ul>
  );
};

ItemGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
