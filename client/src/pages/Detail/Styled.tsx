import styled from 'styled-components';
import { ellipsis, hexTorgba, transformRem } from 'assets/styles';

interface PostsSize {
  width: number;
  height: number;
}

export const StyledDetail = styled.div<PostsSize>`
  padding: 50px;
  width: ${({ width }) => width ? `${width}px` : '100%'};
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greys.grey4};
  padding: 10px;
  height: ${({ height }) => height ? `${height}px` : '100%'};
  box-shadow: ${({ theme }) => hexTorgba(theme.colors.greys.grey4, 0.5)} 0px 2px 4px;

  .poster {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }

  .info {
    margin-top: 8px;

    strong {
      display: block;
      ${ellipsis}
      font-size: ${transformRem(20)};
      font-weight: 700;
    }

    span {
      display: block;
      margin-top: 8px;
      text-align: right;
    }
  }
`;
