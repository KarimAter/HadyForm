import React from "react";

interface Props {
  content: string;
  type: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputField = (props: Props) => {
  const { content, type, handleChange } = props;

  return (
    <div>
      <input
        type={type}
        id={content}
        name={content}
        onChange={handleChange}
        className="border-black border-2 w-10/12  text-grey-darkest mb-1"
      />
    </div>
  );
};

export default InputField;
