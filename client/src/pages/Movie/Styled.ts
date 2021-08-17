import styled from 'styled-components';
import { transformEm, transformRem } from 'assets/styles';

export const StyledMovie = styled.div`
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: -5px;

    > * {
      width: calc(50% - 10px);
      margin: 5px;
    }
  }

  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: -5px;

    > * {
      width: calc((100% / 3) - 10px);
      margin: 5px;
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

export const StyledBasicWrap = styled.div`
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

export const StyledBasicInfo = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 0 ${transformEm(10)};
  transform: translateY(-50%);

  @media (min-width: 769px) {
    margin: 0 ${transformEm(20)};
    transform: translateY(-60%);
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

  .main-poster + div {
    flex: 1 1 auto;
    padding-left: ${transformEm(12)};
    background-color: #fff;
  }

  .rote {
    margin: ${transformEm(4)} 0;
    span {
      font-size: ${transformRem(14)};
    }
  }
`;
