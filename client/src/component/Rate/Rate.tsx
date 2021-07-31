import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { StyledRate } from './Styled';

interface RateProps {
  score: number;
  className?: string;
}

export const Rate = ({ score, className = '' }: RateProps) => {
  return (
    <StyledRate className={className}>
      <span>
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
        <BsStar />
      </span>
      <strong>{score}점</strong>
    </StyledRate>
  );
};
