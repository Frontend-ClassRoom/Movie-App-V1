import React, { HTMLAttributes } from 'react';
import { StyledButton } from './Styled';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  size?: size;
  disabled?: boolean;
  link?: boolean;
}

export type size = 'basic' | 'tiny' | 'small' | 'medium' | 'large';
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'link';

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      <span className="label">{props.label}</span>
    </StyledButton>
  );
};
