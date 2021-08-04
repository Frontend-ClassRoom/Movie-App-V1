import React from 'react';
import { GenresArray } from 'types/movie';
import { StyledBadge, StyledBadgeItem } from './Styled';

interface Props {
  items: GenresArray[];
  hash?: boolean;
}

export const Badge = ({ items, hash = false }: Props) => {
  return (
    <StyledBadge className={hash ? 'badge-hash' : ''}>
      {items?.map(({ id, name }) => (
        <StyledBadgeItem key={id}>{name}</StyledBadgeItem>
      ))}
    </StyledBadge>
  );
};
