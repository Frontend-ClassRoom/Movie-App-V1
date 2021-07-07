import styled, { css } from "styled-components";
import { transformEm, transformPx } from "assets/styles";
import { ButtonProps } from "component";

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;

  ${({ link }) => {
    if (!link) {
      return `
        padding: ${
          (transformEm(5, +transformPx(1.2)),
          transformEm(10, +transformPx(1.2)))
        };
        background-color: #a5d6a7;
        border: 1px solid #a5d6a7;
        line-height: 1;
        border-radius: 50rem;
        color: #fff;
      `;
    } else {
      return `
        padding: 0;
        background-color: transparent;
        border: 0;
        color: #504f4f;
      `;
    }
  }};
`;
