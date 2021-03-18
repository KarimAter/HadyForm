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
    <div className="flex flex-row justify-between ml-4 ">
      <label htmlFor={content} className="font-medium text-base w=2/12">
        {content}
      </label>
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

export default Input;
