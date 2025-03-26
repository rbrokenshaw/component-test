import { useEffect, useState } from "react";
import {
  Button,
  Key,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as ReactAriaSelect,
  SelectValue,
} from "react-aria-components";
import classes from "./select.module.css";

type SelectItem = { id: number; name: string };

type Props = {
  label: string;
  items?: SelectItem[];
};

export const Select = ({ label, items }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Key>(0);

  const handleSelectionChange = (value: Key) => {
    setSelectedItem(value);
  };

  useEffect(() => {
    console.log(
      selectedItem,
      items?.find((item) => item.id === selectedItem)
    );
  }, [selectedItem]);

  return (
    <ReactAriaSelect
      selectedKey={selectedItem}
      onSelectionChange={handleSelectionChange}
    >
      <Label className={classes.label}>{label}:</Label>
      <Button className={classes.button}>
        <SelectValue />
        <span aria-hidden="true" className={classes.span}>
          ▼
        </span>
      </Button>
      <Popover className={classes.popover}>
        <ListBox items={items}>
          {(item) => (
            <ListBoxItem className={classes.listBoxItem}>
              {item.name}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ReactAriaSelect>
  );
};
