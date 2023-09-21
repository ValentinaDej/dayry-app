import PropTypes from "prop-types";

import { CommentElement } from "./CommentElement/CommentElement";

import classes from "./CommentGroup.module.scss";

export const CommentGroup = ({ comments, ...props }) => {
  return (
    <>
      {comments?.map((comment) => (
        <CommentElement
          key={comment.id}
          name={comment.name}
          color={comment.color}
        />
      ))}
    </>
  );
};

CommentGroup.propTypes = {};
