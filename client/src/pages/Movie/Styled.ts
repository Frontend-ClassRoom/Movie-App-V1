import styled from 'styled-components';
import { transformEm } from 'assets/styles';

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

  .main-poster-wrap {
    overflow: hidden;
    max-width: 768px;
    margin: 0 auto;
    padding-bottom: 56.86%;
    position: relative;
  }

  .main-poster {
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
    .main-poster-wrap {
      padding-bottom: 430px;
      position: relative;
    }
    .main-poster {
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
`;
