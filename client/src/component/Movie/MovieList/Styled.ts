import styled from 'styled-components';
import { multipleEllipsis, transformEm, hexTorgba } from 'assets/styles';

export const StyledList = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.greys.grey4};
  border-radius: 10px;
  box-shadow: ${({ theme }) => hexTorgba(theme.colors.greys.grey4, 0.5)} 0px 2px
    4px;
  overflow: hidden;
`;

export const ListDesc = styled.div`
  flex: 1 1 auto;
  margin-right: 10px;
  width: calc(100% - 100px);
  padding: 10px;

  .title {
    display: block;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .overview {
    margin-top: 12px;
    ${multipleEllipsis(2)}
  }

  p:not(.title) {
    line-height: 1.6;
    font-size: ${transformEm(14)};
  }
`;

export const ListThumbnail = styled.div`
  flex: 0 0 auto;
  width: 100px;
  border-radius: 6px;
  overflow: hidden;
`;
