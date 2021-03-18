import React from "react";
import LabeledFormElement from "./LabeledFormElement.component";

interface Props {
  submitData(data: any): void;
  headerField: Array<string>;
  inputFields: Array<string>;
  error: string;
}

const GroupInput = (props: Props) => {
  const { submitData, headerField, error, inputFields } = props;

  return (
    <div
      className="border-black border-solid border-2 flex flex-col
    mb-4 text-red-400 text-center bg-gray-200 h-auto"
    >
      <h2 className="font-semibold text-green-500">{headerField}</h2>
      {inputFields.map((field) => (
        <LabeledFormElement
          key={field}
          content={field}
          error={error}
          type={field !== "password" && field !== "email" ? "text" : field}
          handleChange={submitData}
        ></LabeledFormElement>
      ))}
    </div>
  );
};

export default GroupInput;
