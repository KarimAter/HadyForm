import React from "react";
import LabeledFormElement from "./LabeledFormElement.component";

interface Props {
  propagateData(data: any): void;
  headerField: Array<string>;
  inputFields: Array<string>;
}

const GroupInput = (props: Props) => {
  const { propagateData, headerField, inputFields } = props;

  return (
    <div
      className="border-gray-500 border-b-1 p-4 w-2/3 flex flex-col
    mb-4 mx-auto bg-white h-auto rounded-lg shadow-md"
    >
      <h1 className="font-bold  text-center text-black ">{headerField}</h1>
      {inputFields.map((field) => (
        <LabeledFormElement
          key={field}
          content={field}
          type={field !== "password" && field !== "email" ? "text" : field}
          handleChange={propagateData}
        ></LabeledFormElement>
      ))}
    </div>
  );
};

export default GroupInput;
