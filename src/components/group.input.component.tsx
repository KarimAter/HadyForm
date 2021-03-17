import React from "react";
import Input from "./input.component";

interface Props {
  submitData(data: any): void;
  headerField: Array<string>;
  inputFields: Array<string>;
}

const GroupInput = (props: Props) => {
  const { submitData, headerField, inputFields } = props;

  return (
    <div className="border-2 text-red-400 text-center bg-gray-200 h-full">
      <h2>{headerField}</h2>
      {inputFields.map((field) => (
        <Input
          key={field}
          content={field}
          type={field !== "password" && field !== "email" ? "text" : field}
          handleChange={submitData}
        ></Input>
      ))}
    </div>
  );
};

export default GroupInput;
