import styled from 'styled-components';
import { transformRem } from 'assets/styles';

export const StyledRate = styled.div`
  span {
    display: inline-block;
    font-size: ${transformRem(20)};
    color: ${(props) => props.theme.colors.primary};
    vertical-align: middle;
  }
  strong {
    display: inline-block;
    margin-left: ${transformRem(12)};
    font-size: ${transformRem(14)};
    vertical-align: middle;
  }
`;
