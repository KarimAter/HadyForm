import React from "react";

interface input {
  content: string;
  type: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: input) => {
  const { content, type, handleChange } = props;
  console.log("rerenders");
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={content} className="font-medium text-3xl">
        {content}
      </label>
      <input
        type={type}
        id={content}
        name={content}
        onChange={handleChange}
        className="border-black border-2 w-2/4  text-grey-darkest mt-4"
      />
    </div>
  );
};

export default Input;
