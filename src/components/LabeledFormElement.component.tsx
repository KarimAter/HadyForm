import React from "react";
import InputField from "./InputField.component";

interface input {
  content: string;
  type: string;
  error: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const LabeledFormElement = (props: input) => {
  const { content, type, error, handleChange } = props;
  console.log("rerenders");

  // console.log(type);

  switch (type) {
    case "text":
    case "email":
    case "password":
    case "number":
      return (
        <div className="flex flex-row justify-between ml-4 ">
          <label htmlFor={content} className="font-medium text-base w=2/12">
            {content}
          </label>
          {true && (
            <InputField
              type={type}
              content={content}
              handleChange={handleChange}
            ></InputField>
          )}
          <div>{error}</div>
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
