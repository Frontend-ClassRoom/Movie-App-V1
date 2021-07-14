import styled from 'styled-components';
import { transformEm } from 'assets/styles';

export const StyledHeader = styled.div`
  padding: ${transformEm(20)} ${transformEm(0)};
`;

export const StyledHeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    padding: 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`;

export const StyledLogo = styled.h1``;

export const StyledBtnSet = styled.div``;
