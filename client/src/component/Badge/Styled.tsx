import styled from 'styled-components';
import { transformRem } from 'assets/styles';

export const StyledBadge = styled.div`
  position: relative;

  &.badge-hash span::before {
    content: '#';
  }
`;

export const StyledBadgeItem = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 2px;
  padding: ${transformRem(4)} ${transformRem(8)};
  background-color: ${(props) => props.theme.colors.greys.grey4};
  border-radius: 50rem;
  font-size: ${transformRem(12)};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
