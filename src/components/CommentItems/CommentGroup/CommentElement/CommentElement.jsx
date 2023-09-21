import PropTypes from "prop-types";

import classes from "./CommentElement.module.scss";

export const CommentElement = ({ name, color, ...props }) => {
  const cardColorStyle = {
    backgroundColor: color,
  };

  return (
    <div className={`${classes[`card`]}`} {...props}>
      <div className={`${classes[`card-color`]}`} style={cardColorStyle}></div>
      <div className={`${classes[`card-body`]}`}>
        <pre className={`${classes[`card-text`]}`}>{name}</pre>
      </div>
    </div>
  );
};

CommentElement.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};
