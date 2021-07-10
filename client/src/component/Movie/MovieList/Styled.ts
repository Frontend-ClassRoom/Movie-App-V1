import styled from 'styled-components';
import { transformEm } from 'assets/styles';

export const StyledList = styled.div`
  display: flex;
  margin-bottom: 12px;
  width: 100%;
`;

export const ListDesc = styled.div`
  flex: 1;
  margin-right: 10px;
  > strong {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
  }
  > p {
    line-height: 1.6;
    font-size: ${transformEm(14)};
  }
`;

export const ListThumbnail = styled.div`
  flex: 1;
`;
