import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { StyledRate } from './Styled';

interface RateProps {
  score: number;
  className?: string;
}

export const Rate = ({ score, className = '' }: RateProps) => {
  const STAR_NUMBER = 5;
  const fill = Math.floor(score / 2);
  const half = (score * 10) % 10 >= 5;
  const rateResult: JSX.Element[] = [];

  const emptyStar = (num: number) => {
    for (let i = STAR_NUMBER; i + fill < num; i++) {
      rateResult.push(<BsStar key={i} />);
    }
    return rateResult;
  };

  const fillStar = () => {
    for (let i = 0; i < fill; i++) {
      rateResult.push(<BsStarFill key={i} />);
    }
    if (half) {
      rateResult.push(<BsStarHalf key={fill} />);
      emptyStar(STAR_NUMBER + fill + 1);
    } else {
      emptyStar(STAR_NUMBER + fill);
    }
    return rateResult;
  };

  return (
    <StyledRate className={className}>
      <span>{fillStar()}</span>
      <strong>{score}점</strong>
    </StyledRate>
  );
};
