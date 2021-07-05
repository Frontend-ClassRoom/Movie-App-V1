import React from "react";

interface TextInputProps {
  value: string | number;
  type: string;
  placeholder?: string;
  onChange: (userValue: string) => void;
  submit: () => void;
}

const TextInput = ({
  value,
  type,
  onChange,
  placeholder = "입력해주세요.",
  submit,
}: TextInputProps) => {
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

export default TextInput;
