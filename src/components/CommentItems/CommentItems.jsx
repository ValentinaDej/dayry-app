import PropTypes from "prop-types";

import { BoxShadow } from "../../shared/BoxShadow/BoxShadow";
import { Form } from "../../shared/Form/Form";
import { FormField } from "../../shared/FormField/FormField";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import { Title } from "../../shared/Title/Title";
import { CommentGroup } from "./CommentGroup/CommentGroup";

export const CommentItems = ({
  commentNumber,
  savedComments,
  onAction,
  commentName,
  setCommentName,
  commentColor,
  setCommentColor,
  ...props
}) => {
  return (
    <BoxShadow>
      <Title>Comments #{commentNumber}</Title>
      <CommentGroup comments={savedComments} />
      <Form onSubmit={onAction}>
        <FormField>
          <Input
            type="color"
            value={commentColor}
            onChange={(e) => setCommentColor(e.target.value)}
          />
          <Input
            mode="textarea"
            placeholder="Type comment here..."
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
            required
          />
          <Button mode={"primary"} type="submit">
            Add New
          </Button>
        </FormField>
      </Form>
    </BoxShadow>
  );
};

CommentItems.propTypes = {};
