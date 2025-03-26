import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select/CSS Modules",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const CSSModules: Story = {
  args: {
    label: "Select an Item",
    items: [
      { id: 1, name: "Aerospace" },
      { id: 2, name: "Mechanical" },
      { id: 3, name: "Civil" },
      { id: 4, name: "Biomedical" },
      { id: 5, name: "Nuclear" },
      { id: 6, name: "Industrial" },
      { id: 7, name: "Chemical" },
      { id: 8, name: "Agricultural" },
      { id: 9, name: "Electrical" },
    ],
  },
};
