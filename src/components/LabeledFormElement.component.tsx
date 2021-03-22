import React from "react";
import { IError } from "../Validator";
import InputField from "./InputField.component";

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
      return (
        <select name={id} id="countries" onChange={handleSelect}>
          <option value="">Please Select Country...</option>
          <option value="Egypt">Egypt</option>
          <option value="Lebanon">Lebanon</option>
          <option value="USA">USA</option>
          <option value="France">France</option>
        </select>
      );
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

  // return (
  //   <div className="flex flex-row justify-between ml-4 ">
  //     <label htmlFor={content} className="font-medium text-base w=2/12">
  //       {content}
  //     </label>
  //     {true && (
  //       <InputField
  //         type={type}
  //         content={content}
  //         handleChange={handleChange}
  //       ></InputField>
  //     )}
  //   </div>
  // );
};

export default LabeledFormElement;
