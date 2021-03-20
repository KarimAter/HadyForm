import React from "react";
import { IError } from "../Validator";
import LabeledFormElement from "./LabeledFormElement.component";

interface Props {
  propagateData(data: any): void;
  headerField: string;
  inputFields: any;
  error: Map<string, IError>;
}

const GroupInput = (props: Props) => {
  const { propagateData, headerField, error, inputFields } = props;

  // if (typeof inputFields === "a")
  console.log(inputFields);
  const list: any[] = [];

  const addToRenderList = (field: string): void => {
    list.push(
      <LabeledFormElement
        key={field}
        content={field}
        error={error}
        type={field !== "password" && field !== "email" ? "text" : field}
        handleChange={propagateData}
      ></LabeledFormElement>
    );
  };

  if (Array.isArray(inputFields)) {
    inputFields.forEach((arrayField: any) => {
      for (const f in arrayField) {
        addToRenderList(f);
      }
    });
  } else {
    for (const field in inputFields) {
      addToRenderList(field);
    }
  }

  console.log(list);

  return (
    <div
      className="border-gray-500 border-b-1 p-4 w-2/3 flex flex-col
    mb-4 mx-auto bg-white h-auto rounded-lg shadow-md"
    >
      <h1 className="font-bold  text-center text-black ">{headerField}</h1>
      {list}
    </div>
  );
};

export default GroupInput;
