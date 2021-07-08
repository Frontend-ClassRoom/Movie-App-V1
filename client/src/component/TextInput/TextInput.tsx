import React from 'react';

interface InputBoxProps {
  value: string | number;
  type: string;
  placeholder?: string;
  onChange: (userValue: string) => void;
}

const InputBox = ({
  value,
  type,
  onChange,
  placeholder = '입력해주세요.',
}: InputBoxProps) => {
  return (
    <span style={{ display: 'block', width: '100%', marginBottom: '10px' }}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        title={placeholder}
        style={{ width: '100%' }}
        autoComplete={type === 'password' ? 'off' : 'on'}
      />
    </span>
  );
};

export default InputBox;
