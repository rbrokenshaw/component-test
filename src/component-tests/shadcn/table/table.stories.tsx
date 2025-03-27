import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";

const meta: Meta<typeof Table> = {
  title: "Shadcn UI/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {},
};
