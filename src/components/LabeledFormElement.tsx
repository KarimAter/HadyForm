import React from "react";
import { IError } from "../validation/validators";
import InputField from "./InputField";
import Select from "./Select";

interface input {
  id: string;
  content: string;
  type: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void;
  error: Map<string, IError>;
}

const LabeledFormElement = (props: input) => {
  const { id, content, type, error, handleSelect, handleChange } = props;
  console.log("rerenders");

  switch (type) {
    case "country": {
      return <Select id={id} handleSelect={handleSelect}></Select>;
    }
    case "text":
    case "email":
    case "password":
    case "number":
      return (
        <div className="flex flex-col  ">
          <label
            htmlFor={content}
            className="text-sm font-bold text-gray-600 mt-2 block"
          >
            {content}
          </label>
          <div>
            {true && (
              <InputField
                type={type}
                content={id}
                handleChange={handleChange}
              ></InputField>
            )}
            <span>{error.get(id)?.errorMessage}</span>
          </div>
        </div>
      );

    default:
      return <div></div>;
  }
};

export default LabeledFormElement;
