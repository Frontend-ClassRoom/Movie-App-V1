import { ChangeEvent } from 'react';
import { StyledInputBox } from './Styled';

interface InputBoxProps {
  value: string | number;
  type: string;
  name?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  submit?: (e: any) => void;
  className?: string;
  autoComplete?: string;
  readonly?: boolean;
}

const InputBox = ({
  value,
  type,
  onChange,
  placeholder = '입력해주세요.',
  className,
  submit,
  name,
  autoComplete = 'off',
  readonly = false,
}: InputBoxProps) => {
  return (
    <StyledInputBox className={className}>
      <input
        style={{ width: '100%' }}
        type={type}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        onKeyPress={(e) =>
          e.key === 'Enter' && typeof submit === 'function' && submit(e)
        }
        placeholder={placeholder}
        title={placeholder}
        readOnly={readonly}
        autoComplete={autoComplete}
      />
    </StyledInputBox>
  );
};

export default InputBox;
