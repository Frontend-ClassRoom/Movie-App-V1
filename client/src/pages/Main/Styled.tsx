import styled from 'styled-components';
import { ellipsis, hexTorgba, transformRem } from 'assets/styles';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const StyledListItem = styled.li`
  width: calc(100% / 5 - 10px);
  margin: 0 10px 0 0;

  &:nth-child(n + 6) {
    margin-top: 10px;
  }

  &:nth-child(5n) {
    margin-right: 0px;
  }

  /*
    transition: all 0.3s ease;
    cursor: pointer;
  */
  @media (max-width: 1280px) {
    width: calc(100% / 4 - 10px);

    &:nth-child(n + 5) {
      margin-top: 10px;
    }

    &:nth-child(5n) {
      margin-right: 10px;
    }

    &:nth-child(4n) {
      margin-right: 0px;
    }
  }

  @media (max-width: 1024px) {
    width: calc(100% / 3 - 10px);

    &:nth-child(n + 4) {
      margin-top: 10px;
    }

    &:nth-child(4n) {
      margin-right: 10px;
    }

    &:nth-child(3n) {
      margin-right: 0px;
    }
  }

  @media (max-width: 768px) {
    width: calc(100% / 2 - 10px);

    &:nth-child(n + 3) {
      margin-top: 10px;
    }

    &:nth-child(3n) {
      margin-right: 10px;
    }

    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
`;

export const StyledPhotoCard = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.greys.grey4};
  padding: 10px;
  height: 100%;
  box-shadow: ${({ theme }) => hexTorgba(theme.colors.greys.grey4, 0.5)} 0px 2px
    4px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => hexTorgba(theme.colors.primary, 0.5)} 0px 2px
      4px;

    &:before,
    .poster:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &:before {
      background-color: ${({ theme }) => hexTorgba(theme.colors.primary, 0.2)};
    }
    .poster:before {
      background-color: ${({ theme }) =>
        hexTorgba(theme.colors.greys.white, 0.2)};
    }
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
