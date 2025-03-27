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
import styled from "styled-components";

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
      <StyledLabel>{label}:</StyledLabel>
      <StyledButton>
        <SelectValue />
        <StyledSpan aria-hidden="true">▼</StyledSpan>
      </StyledButton>
      <StyledPopover>
        <ListBox items={items}>
          {(item) => <StyledListBoxItem>{item.name}</StyledListBoxItem>}
        </ListBox>
      </StyledPopover>
    </ReactAriaSelect>
  );
};

// Styled Components
const StyledLabel = styled(Label)`
  padding: 2px 4px;
`;

const StyledButton = styled(Button)`
  border: 1px solid oklch(0.872 0.01 258.338);
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  margin-left: 8px;
  color: oklch(0.496 0.265 301.924);
`;

const StyledPopover = styled(Popover)`
  border: 1px solid oklch(0.872 0.01 258.338);
  border-radius: 4px;
`;

const StyledListBoxItem = styled(ListBoxItem)`
  cursor: pointer;
  padding: 4px 12px;

  &:hover {
    background-color: oklch(0.967 0.003 264.542);
  }
`;
