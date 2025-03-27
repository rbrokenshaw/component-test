import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectItem as TypeSelectItem } from "@/types";
import { useEffect, useState } from "react";

type Props = { items: TypeSelectItem[]; placeholder: string };

export const Select = ({ items, placeholder }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <SelectComponent value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.id} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectComponent>
  );
};
