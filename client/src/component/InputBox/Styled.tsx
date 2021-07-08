import styled, { css } from "styled-components";
import { transformEm, transformPx } from "assets/styles";
import { ButtonProps } from "component";

export const StyledInput = styled.button<ButtonProps>`
  position: relative;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 50rem;
  color: #999;
  font-size: 1.2rem;
  line-height: 1;

  &::placeholder {
    color: #999;
  }
`;
