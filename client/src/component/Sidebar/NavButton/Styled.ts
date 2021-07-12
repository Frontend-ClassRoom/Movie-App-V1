import styled from 'styled-components';
import { transformEm } from 'assets/styles';

export const StyledNavButton = styled.li`
  display: flex;
  align-items: center;
  height: ${transformEm(32)};
  > a {
    flex: 1;
    display: flex;
    align-items: center;
    > svg {
      margin-right: ${transformEm(10)};
    }
  }
`;
