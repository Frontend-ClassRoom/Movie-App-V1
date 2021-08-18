import styled from 'styled-components';
import { multipleEllipsis, transformEm, hexTorgba } from 'assets/styles';

export const StyledList = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greys.grey4};
  border-radius: 10px;
  box-shadow: ${({ theme }) => hexTorgba(theme.colors.greys.grey4, 0.5)} 0px 2px
    4px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6px;
  }

  &.list {
    align-items: stretch;
  }

  &.card {
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;

    > * {
      width: 100% !important;

      &:first-child {
        height: auto;
        padding-bottom: 150%;
      }

      &:last-child {
        padding: 10px 0 0 0;
        margin: 0;
      }

      .title {
        margin-bottom: 4px;
      }
    }
  }
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

    @media (max-width: 768px) {
      font-size: 14px;
    }
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
  position: relative;
  flex: 0 0 auto;
  width: 100px;
  height: 150px;
  overflow: hidden;

  .movie-poster {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    transform: translate(-50%, -50%);
  }
`;
