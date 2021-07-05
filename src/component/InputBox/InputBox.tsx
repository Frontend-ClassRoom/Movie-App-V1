import React from "react";

interface InputBoxProps {
  value: string | number;
  type: string;
  placeholder?: string;
  onChange: (userValue: string) => void;
  submit: () => void;
}

const InputBox = ({
  value,
  type,
  onChange,
  placeholder = "입력해주세요.",
  submit,
}: InputBoxProps) => {
  return (
    <span style={{ display: "block", width: "100%", marginBottom: "10px" }}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && submit()}
        placeholder={placeholder}
        title={placeholder}
        style={{ width: "100%" }}
      />
    </span>
  );
};

export default InputBox;
