import { transformRem } from 'assets/styles';
import styled from 'styled-components';

export const JoinForm = styled.form`
  width: 100%;

  .join-form {
    margin: 0.5rem 0;
    width: 100%;
  }
`;

export const StyledTitle = styled.div`
  margin-bottom: ${transformRem(8)};
  font-size: ${(props) => props.theme.heading.h2.fontSize};
  font-weight: ${(props) => props.theme.heading.h2.fontWeight};
`;
