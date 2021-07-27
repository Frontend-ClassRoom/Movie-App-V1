import styled from 'styled-components';
import { transformEm } from 'assets/styles';

export const StyledHeader = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  padding: ${transformEm(17)} ${transformEm(0)};
  background: #fff;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  transition: box-shadow 0.5s ease;
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
