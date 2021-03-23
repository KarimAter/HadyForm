import React from "react";
import { IError } from "../validation/validators";
import LabeledFormElement from "./LabeledFormElement";

interface Props {
  propagateData(data: any): void;
  handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void;
  headerField: string;
  phoneHandler: (action: string) => void;
  inputFields: any;
  error: Map<string, IError>;
}

const GroupInput = (props: Props) => {
  const {
    propagateData,
    handleSelect,
    headerField,
    error,
    phoneHandler,
    inputFields,
  } = props;

  const isArray: boolean = Array.isArray(inputFields);
  const list: JSX.Element[] = [];

  const addToRenderList = (field: string, index?: number): void => {
    let generatedKey: string =
      index !== undefined ? `${field}_${index}` : field;
    list.push(
      <LabeledFormElement
        key={generatedKey}
        id={generatedKey}
        content={field}
        error={error}
        type={
          field !== "password" && field !== "email" && field !== "country"
            ? "text"
            : field
        }
        handleChange={propagateData}
        handleSelect={handleSelect}
      ></LabeledFormElement>
    );
  };

  if (isArray) {
    inputFields.forEach((arrayField: any, index: number) => {
      for (const f in arrayField) {
        addToRenderList(f, index);
      }
    });
  } else {
    for (const field in inputFields) {
      addToRenderList(field);
    }
  }

  return (
    <div
      className="border-gray-500 border-b-1 p-4 w-2/3 flex flex-col 
    mb-4 mx-auto bg-white h-auto rounded-lg shadow-md"
    >
      <h1 className="font-bold  text-center text-black ">{headerField}</h1>
      {isArray && (
        <div className="flex justify-end space-x-1 ">
          <button
            className="font-bold text-xl rounded-full bg-green-500 shadow-md
            focus:outline-none 
          w-8 h-8  hover:bg-green-800 self-end text-center"
            onClick={() => phoneHandler("add")}
          >
            &#43;
          </button>
          <button
            className="font-bold text-xl rounded-full bg-green-500
            focus:outline-none 

          w-8 h-8  hover:bg-green-800 self-end text-center"
            onClick={() => phoneHandler("remove")}
          >
            &#8211;
          </button>
        </div>
      )}
      {list}
    </div>
  );
};

export default GroupInput;
