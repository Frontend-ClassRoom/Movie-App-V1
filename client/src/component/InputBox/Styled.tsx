import styled from 'styled-components';

export const StyledInputBox = styled.div`
  position: relative;
  color: #999;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 1;
  * {
    outline: none;
  }
  input {
    padding: ${(props) => props.theme.inputs.padding};
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 50rem;
  }

  textarea {
    padding: 10px;
    width: 100%;
    height: 300px;
    resize: none;
  }

  &::placeholder {
    color: #999;
  }
`;
