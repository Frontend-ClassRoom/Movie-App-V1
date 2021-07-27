import styled from 'styled-components';
import { ellipsis, hexTorgba, transformRem } from 'assets/styles';

interface PostsSize {
  width: number;
  height: number;
}

export const StyledContainer = styled.div``;

export const StyledDetail = styled.div`
  padding: 50px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greys.grey4};
  box-shadow: ${({ theme }) => hexTorgba(theme.colors.greys.grey4, 0.5)} 0px 2px 4px;

  .review-front {
    display: flex;
    align-items: center;

  }
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
