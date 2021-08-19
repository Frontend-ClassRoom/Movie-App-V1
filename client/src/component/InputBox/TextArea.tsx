import { ChangeEvent } from 'react';
import { StyledInputBox } from './Styled';

interface TextAreaBoxProps {
  value: string | number;
  name?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  submit?: (e: any) => void;
  className?: string;
}

const TextAreaBox = ({
  value,
  name,
  placeholder,
  onChange,
  className,
}: TextAreaBoxProps) => {
  return (
    <StyledInputBox className={className}>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        title={placeholder}
      />
    </StyledInputBox>
  );
};

export default TextAreaBox;
