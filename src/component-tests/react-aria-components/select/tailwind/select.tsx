import { SelectItem } from "@/types";
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
      <Label className="px-1 py-2">{label}:</Label>
      <Button className="border border-gray-300 rounded px-2 py-1 cursor-pointer">
        <SelectValue />
        <span aria-hidden="true" className="ml-2 text-purple-700">
          ▼
        </span>
      </Button>
      <Popover className="border border-gray-300 rounded">
        <ListBox items={items}>
          {(item) => (
            <ListBoxItem className="cursor-pointer hover:bg-gray-100 px-3 py-1">
              {item.name}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ReactAriaSelect>
  );
};
