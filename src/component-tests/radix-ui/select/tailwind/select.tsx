import { Select as RadixSelect } from "@radix-ui";

export const Select = () => {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="SelectTrigger" aria-label="Food">
        <RadixSelect.Value placeholder="Select a fruit…" />
        <RadixSelect.Icon className="SelectIcon">v</RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="SelectContent">
          content
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
