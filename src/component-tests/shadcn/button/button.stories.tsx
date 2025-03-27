import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariant } from "./button";

const meta: Meta<typeof Button> = {
  title: "Shadcn UI/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.Primary,
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.Secondary,
  },
};

export const Destructive: Story = {
  args: {
    variant: ButtonVariant.Destructive,
  },
};

export const Outline: Story = {
  args: {
    variant: ButtonVariant.Outline,
  },
};

export const Ghost: Story = {
  args: {
    variant: ButtonVariant.Ghost,
  },
};

export const Link: Story = {
  args: {
    variant: ButtonVariant.Link,
  },
};
