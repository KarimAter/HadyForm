import React, { useState } from "react";
import { IUserData, IValidationObject } from "../App";
import validate, { IError } from "../Validator";
import GroupInput from "./group.input.component";

interface IProps {
  formData: IUserData;
  schema: IValidationObject;
}

const Form = ({ formData, schema }: IProps) => {
  const [textMessage, setTextMessage] = useState(
    "Submission data will be here"
  );

  // console.log(formData);

  const [user, setUser] = useState(formData);

  const inputFields = Object.assign([], ...[...Object.values(formData)]);
  const headerFields = Object.keys(formData);

  let initialError: Map<string, IError> = new Map<string, IError>();

  inputFields.forEach((inputField: string) =>
    initialError.set(inputField, { error: false, errorMessage: "" })
  );

  console.log(inputFields);

  const [error, setError] = useState<Map<string, IError>>(
    new Map<string, IError>()
  );

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    const finalError = validate(user, schema);

    let allCheck: boolean = false;

    finalError.forEach((b) => (allCheck = allCheck || b.error));

    setError(finalError);

    allCheck
      ? setTextMessage("Validation Error")
      : setTextMessage(JSON.stringify(user, null, 2));
    e.preventDefault();
  };

  const setChildData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: any = e.target.name;

    headerFields.forEach((h) => {
      if (fieldName in formData[h]) {
        formData[h][fieldName] = e.target.value;
      }
    });
    // dispatch();

    setUser(formData);
  };

  return (
    <div className="h-full flex flex-row p-6">
      <div className="w-3/4 ">
        {headerFields.map((fld, index) => (
          <GroupInput
            propagateData={setChildData}
            key={fld}
            headerField={fld}
            error={error}
            inputFields={formData[fld]}
          ></GroupInput>
        ))}

        <button
          className="bg-blue-500 block w-1/6 mx-auto hover:bg-blue-700 
          rounded text-gray-900 text-xl font-mono"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>

      <textarea
        className=" bg-gray-50 w-1/4 h-96 my-auto border-dashed border-2"
        value={textMessage}
      />
    </div>
  );
};

export default Form;
