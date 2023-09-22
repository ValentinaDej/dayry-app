import PropTypes from "prop-types";

import { BoxShadow } from "../../shared/BoxShadow/BoxShadow";
import { Form } from "../../shared/Form/Form";
import { FormField } from "../../shared/FormField/FormField";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import { Title } from "../../shared/Title/Title";

import { ItemGroup } from "./ItemGroup/ItemGroup";

export const DayryItems = ({
  items,
  onDelete,
  onItemSelect,
  itemName,
  setItemName,
  onAction,
  commentNumber,
  ...props
}) => {
  return (
    <BoxShadow>
      <Title>Items</Title>
      <Form onSubmit={onAction}>
        <FormField>
          <Input
            placeholder="Type name here..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
          <Button mode={"info"} type="submit">
            Add New
          </Button>
        </FormField>
      </Form>
      <ItemGroup
        items={items}
        onDelete={onDelete}
        onItemSelect={onItemSelect}
        commentNumber={commentNumber}
      />
    </BoxShadow>
  );
};

DayryItems.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
  onItemSelect: PropTypes.func,
  itemName: PropTypes.string,
  setItemName: PropTypes.func,
};
