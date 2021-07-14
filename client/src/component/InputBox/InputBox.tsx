import React, { ChangeEvent } from 'react';
import { StyledInputBox } from './Styled';

interface InputBoxProps {
  value: string | number;
  type: string;
  name?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  submit: (e: any) => void;
  className?: string;
}

const InputBox = ({
  value,
  type,
  onChange,
  placeholder = '입력해주세요.',
  className,
  submit,
  name,
}: InputBoxProps) => {
  return (
    <StyledInputBox className={className}>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        onKeyPress={(e) => e.key === 'Enter' && submit(e)}
        placeholder={placeholder}
        title={placeholder}
        style={{ width: '100%' }}
      />
    </StyledInputBox>
  );
};

export default InputBox;
