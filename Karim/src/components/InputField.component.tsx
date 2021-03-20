import React from "react";

interface Props {
  content: string;
  type: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputField = (props: Props) => {
  const { content, type, handleChange } = props;

  return (
    <input
      type={type}
      id={content}
      name={content}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded mt-1"
    />
  );
};

export default InputField;
