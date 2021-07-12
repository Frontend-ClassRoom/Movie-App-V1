import styled, { css } from 'styled-components';
import { transformEm, transformPx } from 'assets/styles';
import { ButtonProps } from 'component';

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-block;
  padding: ${(transformEm(5, +transformPx(1.2)),
  transformEm(10, +transformPx(1.2)))};
  background-color: ${(props) => props.theme.colors.greys.grey5};
  border: 1px solid ${(props) => props.theme.colors.greys.grey5};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  color: ${(props) => props.theme.colors.greys.grey2};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  /* size styles */
  ${(props) => props.size === 'basic' && StyledBasicButton}
  ${(props) => props.size === 'tiny' && StyledTinyButton}
  ${(props) => props.size === 'small' && StyledSmallButton}
  ${(props) => props.size === 'medium' && StyledMediumButton}
  ${(props) => props.size === 'large' && StyledLargeButton}

  /* variant styles */
  ${(props) => props.variant === 'default' && StyledDefaultButton}
  ${(props) => props.variant === 'primary' && StyledPrimaryButton}
  ${(props) => props.variant === 'secondary' && StyledSecondaryButton}
  ${(props) => props.variant === 'link' && StyledLinkButton}
`;

const StyledDefaultButton = css<ButtonProps>`
  background-color: ${(props) => props.theme.buttons.default.bgColor};
  border-color: 0;
  color: ${(props) => props.theme.buttons.default.fontColor};
  padding: 0;
`;

const StyledPrimaryButton = css<ButtonProps>`
  background-color: ${(props) => props.theme.buttons.primary.bgColor};
  border-color: ${(props) => props.theme.buttons.primary.bgColor};
  color: ${(props) => props.theme.buttons.primary.fontColor};
`;

const StyledSecondaryButton = css<ButtonProps>`
  background-color: ${(props) => props.theme.buttons.secondary.bgColor};
  border-color: ${(props) => props.theme.buttons.secondary.bgColor};
  color: ${(props) => props.theme.buttons.secondary.fontColor};
`;

const StyledLinkButton = css<ButtonProps>`
  padding: 0;
  background-color: ${(props) => props.theme.buttons.link.bgColor};
  border: 0;
  color: ${(props) => props.theme.buttons.link.fontColor};
`;

const StyledBasicButton = css<ButtonProps>`
  padding: ${(props) => props.theme.buttonSizes.basic.padding};
  font-size: ${(props) => props.theme.buttonSizes.basic.fontSize};
`;

const StyledTinyButton = css<ButtonProps>`
  padding: ${(props) => props.theme.buttonSizes.tiny.padding};
  font-size: ${(props) => props.theme.buttonSizes.tiny.fontSize};
`;

const StyledSmallButton = css<ButtonProps>`
  padding: ${(props) => props.theme.buttonSizes.small.padding};
  font-size: ${(props) => props.theme.buttonSizes.small.fontSize};
`;

const StyledMediumButton = css<ButtonProps>`
  padding: ${(props) => props.theme.buttonSizes.medium.padding};
  font-size: ${(props) => props.theme.buttonSizes.medium.fontSize};
`;

const StyledLargeButton = css<ButtonProps>`
  padding: ${(props) => props.theme.buttonSizes.large.padding};
  font-size: ${(props) => props.theme.buttonSizes.large.fontSize};
`;
