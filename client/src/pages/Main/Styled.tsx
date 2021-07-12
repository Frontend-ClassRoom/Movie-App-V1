import styled from 'styled-components';
import { transformEm } from 'assets/styles';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledListItem = styled.li`
  width: calc(50% - 10px);

  &:nth-child(n + 3) {
    margin-top: 10px;
  }

  &:nth-child(even) {
    margin-left: 10px;
  }

  &:nth-child(odd) {
    margin-right: 10px;
  }

  /* 
    transition: all 0.3s ease;
    cursor: pointer; */
`;

export const StyledPhotoCard = styled.div`
  border-radius: 10px;
  border: 1px solid #333;
  padding: 10px;

  .poster {
    border-radius: 8px;
    overflow: hidden;
  }

  .info {
    margin-top: 4px;
  }
`;
