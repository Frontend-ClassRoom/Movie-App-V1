import styled from 'styled-components';
import { transformEm, mediaQueriesMin } from 'assets/styles';

export const StyledMovie = styled.div`
  padding: ${transformEm(0)} ${transformEm(0)};

  ${mediaQueriesMin('tablet')`
    display: flex;
    align-items: center;
    justify-contents: center;
    flex-wrap: wrap;
    margin: -10px;

    > * {
      width: calc(50% - 20px);
      margin: 10px;
    }
  `}
`;
