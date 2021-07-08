import React from 'react';
import { StyledInputBox } from './Styled';

interface InputBoxProps {
  value: string | number;
  type: string;
  placeholder?: string;
  onChange: (userValue: string) => void;
  submit: () => void;
  className?: string;
}

const InputBox = ({ value, type, onChange, placeholder = '입력해주세요.', submit, className }: InputBoxProps) => {
  return (
    <StyledInputBox className={className}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && submit()}
        placeholder={placeholder}
        title={placeholder}
        style={{ width: '100%' }}
      />
    </StyledInputBox>
  );
};

export default InputBox;
