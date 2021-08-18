import styled from 'styled-components';
import { transformEm, transformRem } from 'assets/styles';

export const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: -5px;

  > * {
    margin: 5px;
    width: calc((100% / 3) - 10px);

    @media (max-width: 769px) {
      width: calc(50% - 10px);
    }
  }

  &.card {
    align-items: stretch;

    > * {
      width: calc((100% / 6) - 10px);
      padding: 6px;

      @media (max-width: 768px) {
        width: calc((100% / 3) - 10px);
      }

      @media (max-width: 425px) {
        width: calc(50% - 10px);
      }
    }
  }
`;

export const StyledMovieDetail = styled.div`
  margin: -20px -${transformEm(16)} 0;
  max-width: 768px;

  @media (min-width: 769px) {
    margin: -20px auto 0;
  }
`;

export const StyledSummary = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 768px;
`;

export const StyledVisualPoster = styled.div`
  overflow: hidden;
  width: 100%;
  padding-bottom: 56.86%;
  position: relative;

  .visual-poster {
    display: block;
    position: absolute;
    width: 120%;
    left: -10%;
    padding-bottom: 56.86%;
    border-radius: 0 0 50% 50%;
    overflow: hidden;
    font-size: 0;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90%;
      overflow: hidden;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 769px) {
    padding-bottom: 430px;
    position: relative;

    .visual-poster {
      left: 50%;
      width: 850px;
      height: auto;
      padding-bottom: 0;
      transform: translateX(-50%);

      img {
        width: 100%;
        position: relative;
        transform: translate(0, 0);
        top: 0;
        max-width: 768px;
        margin-left: -384px;
      }
    }
  }
`;

export const StyledInfo = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: -120px ${transformEm(20)} 0;

  @media (max-width: 768px) {
    margin: -90px ${transformEm(10)} 0;
  }

  @media (max-width: 580px) {
    margin: -60px ${transformEm(10)} 0;
  }

  @media (max-width: 425px) {
    margin: -40px ${transformEm(10)} 0;
  }

  .main-poster {
    position: relative;
    z-index: 1;
    max-width: 150px;
    min-width: 80px;
    width: 20%;
    flex: 0 0 auto;

    img {
      border-radius: ${transformEm(12)};
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 24px 0px,
        rgba(255, 255, 255, 0.5) 0px 0px 0px 1px;
    }
  }
`;

export const StyledBasicInfo = styled.div`
  flex: 1 1 auto;
  padding-left: ${transformEm(12)};
  background-color: #fff;

  .tit {
    font-weight: 700;
  }

  .rote {
    margin: ${transformEm(4)} 0;
    span {
      font-size: ${transformRem(14)};
    }
  }
`;

export const StyledDiscription = styled.div`
  padding: 40px 20px 20px;
`;

export const StyledDiscriptionItem = styled.div`
  &:not(:first-of-type) {
    margin-top: 10px;
  }

  .tit {
    position: relative;
    display: inline-block;
    font-weight: 700;
    font-size: ${transformRem(16)};
    padding-right: 10px;
    margin-right: 10px;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: ${transformRem(12)};
      transform: translateY(-50%);
      background-color: ${(props) => props.theme.colors.greys.grey4};
    }
  }

  .desc {
    font-size: ${transformRem(14)};
    margin-top: 4px;
    line-height: 1.3;
  }

  &.simple {
    display: flex;
    align-items: center;

    .desc {
      margin-top: 0;
      line-height: 1;
    }
  }
`;

export const StyledSimilar = styled.div`
  padding: 40px 20px 20px;

  .tit {
    display: inline-block;
    font-weight: 700;
    font-size: ${transformRem(20)};
    margin-bottom: 10px;
  }
`;
