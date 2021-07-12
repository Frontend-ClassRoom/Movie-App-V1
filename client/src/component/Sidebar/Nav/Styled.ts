import styled from 'styled-components';
import { transformEm } from 'assets/styles';

export const StyledNav = styled.div<{ isOpen: boolean }>`
  // isOpen => Sidebar Open
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  top: 0;
  padding: ${transformEm(32)} ${transformEm(16)};
  width: ${transformEm(200)};
  height: 100%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: left 0.5s ease;
`;

export const StyledNavHeader = styled.div`
  padding-bottom: ${transformEm(16)};
  margin-bottom: ${transformEm(8)};
  border-bottom: 1px solid gray;
`;

export const StyledNavContents = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
`;

export const StyledNavList = styled.ul``;

export const StyledDimm = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.5s 0.3s ease;
`;
