import { Button as ButtonComponent } from "@/components/ui/button";

export enum ButtonVariant {
  Primary = "default",
  Secondary = "secondary",
  Destructive = "destructive",
  Outline = "outline",
  Ghost = "ghost",
  Link = "link",
}

type Props = {
  variant: ButtonVariant;
};

export const Button = ({ variant = ButtonVariant.Primary }: Props) => {
  return <ButtonComponent variant={variant}>Button</ButtonComponent>;
};
