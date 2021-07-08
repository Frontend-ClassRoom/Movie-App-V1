import React from 'react';
import { StyledInputBox } from './Styled';

interface InputBoxProps {
  value: string | number;
  type: string;
  placeholder?: string;
  onChange: (userValue: string) => void;
  className?: string;
}

const InputBox = ({
  value,
  type,
  onChange,
  placeholder = '입력해주세요.',
  className,
}: InputBoxProps) => {
  return (
    <StyledInputBox className={className}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        title={placeholder}
        style={{ width: '100%' }}
      />
    </StyledInputBox>
  );
};

export default InputBox;
