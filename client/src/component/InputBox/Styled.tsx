import styled, { css } from 'styled-components';
import { transformEm, transformPx } from 'assets/styles';

export const StyledInputBox = styled.div`
  position: relative;
  color: #999;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 1;

  input {
    padding: ${(props) => props.theme.inputs.padding};
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 50rem;
  }

  &::placeholder {
    color: #999;
  }
`;
