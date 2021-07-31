import styled from 'styled-components';
import { hexTorgba, transformRem } from 'assets/styles';

export const StyledContainer = styled.div``;

export const StyledDetail = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 480px;
  border: 1px solid ${({ theme }) => theme.colors.greys.grey4};
  border-radius: 10px;
  box-shadow: ${({ theme }) => hexTorgba(theme.colors.greys.grey4, 0.5)} 0px 2px
    4px;
  overflow: hidden;

  @media (min-width: 769px) {
    display: flex;
    align-items: stretch;
    max-width: 768px;
  }
  @media (max-width: 768px) {
    &.flip .photocard-back {
      display: flex;
    }
  }
`;

export const StyledFront = styled.div`
  padding: 10px;

  @media (min-width: 769px) {
    width: calc(50% - ${transformRem(12)});
  }

  .poster {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${transformRem(20)};
    height: ${transformRem(90)};
    text-align: center;

    strong {
      display: inline-block;
      font-weight: 700;
      line-height: 1.3;
    }

    span {
      display: block;
      margin-top: 8px;
      text-align: right;
    }
  }
`;

export const StyledBack = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    margin-left: ${transformRem(24)};
    width: calc(50% - ${transformRem(12)});
  }

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${transformRem(12)};

    .register-date {
      font-size: ${transformRem(14)};
      color: ${(props) => props.theme.colors.greys.grey3};
    }
  }

  > .title {
    padding: ${transformRem(24)} 0;
    border-top: 1px solid ${(props) => props.theme.colors.greys.grey4};
    border-bottom: 1px solid ${(props) => props.theme.colors.greys.grey4};
    font-size: ${transformRem(24)};
    font-weight: 700;
    color: ${(props) => props.theme.colors.greys.grey1};
  }

  dl {
    &:not(:first-child) {
      margin-top: ${transformRem(20)};
    }

    dt.title {
      margin-bottom: ${transformRem(8)};
      font-weight: 700;
      color: ${(props) => props.theme.colors.greys.grey2};
    }

    .watched-date svg {
      display: inline-block;
      font-size: ${transformRem(20)};
      color: ${(props) => props.theme.colors.primary};
      vertical-align: text-bottom;
    }

    .review {
      padding: ${transformRem(12)};
      border: 1px solid ${(props) => props.theme.colors.secondary};
      border-radius: ${transformRem(6)};
      overflow: hidden auto;
    }
  }

  @media (max-width: 425px) {
    .info {
      margin-bottom: ${transformRem(10)};

      .register-date {
        font-size: ${transformRem(12)};
      }

      button {
        padding: 0.375rem 0.75rem;
      }
    }

    > .title {
      padding: ${transformRem(15)} 0;
      font-size: ${transformRem(18)};
    }

    dl {
      dt.title {
        font-size: ${transformRem(14)};
      }

      .watched-date {
        font-size: ${transformRem(14)};
      }

      .review {
        padding: ${transformRem(8)};
        border-radius: ${transformRem(6)};
        font-size: ${transformRem(14)};
      }
    }
  }
`;
