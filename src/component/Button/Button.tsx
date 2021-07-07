import React, { HTMLAttributes } from "react";
import { StyledButton } from "./Styled";

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "css"> {
  label: string;
  variant?: ButtonVariant;
  size?: size;
  disabled?: boolean;
  link?: boolean;
}

export type size = "sm" | "md" | "lg";
export type ButtonVariant = "default" | "primary" | "secondary" | "icon";

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      {props.label}
    </StyledButton>
  );
};
