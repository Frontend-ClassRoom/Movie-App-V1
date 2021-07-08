import { transformRem } from 'assets/styles';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const LoginForm = styled.div`
  width: 100%;

  .login-form {
    margin: 0.5rem 0;
    width: 100%;
  }

  .forget-pw {
    margin: 0.5rem 0 1rem;
    text-align: right;

    button {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }
  }
`;

export const StyledTitle = styled.div`
  margin-bottom: ${transformRem(8)};
  font-size: ${(props) => props.theme.heading.h2.fontSize};
  font-weight: ${(props) => props.theme.heading.h2.fontWeight};
`;

export const StyledText = styled.div`
  margin-bottom: ${transformRem(28)};
`;
