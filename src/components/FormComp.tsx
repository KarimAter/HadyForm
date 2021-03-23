import React, { useState } from "react";
import { IUserData, IValidationObject } from "../App";
import validate, { IError } from "../validation/validators";
import GroupInput from "./GroupInput";

interface IProps {
  formData: IUserData;
  schema: IValidationObject;
  phoneHandler: (action: string) => void;
}

const Form = ({ formData, schema, phoneHandler }: IProps) => {
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

  const [error, setError] = useState<Map<string, IError>>(
    new Map<string, IError>()
  );

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    const finalError = validate(user, schema);

    let allCheck: boolean = false;
    let errorMesage: string = "";

    finalError.forEach((b) => {
      allCheck = allCheck || b.error;
      errorMesage = ` ${errorMesage} \n ${b.errorMessage}`;
    });

    setError(finalError);

    allCheck
      ? setTextMessage(errorMesage)
      : setTextMessage(JSON.stringify(user, null, 2));
    e.preventDefault();
  };

  const setChildData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;

    headerFields.forEach((h) => {
      if (Array.isArray(formData[h])) {
        if (fieldName.slice(0, fieldName.length - 2) in formData[h][0]) {
          formData.phones[parseInt(fieldName.slice(-1))][
            fieldName.slice(0, fieldName.length - 2)
          ] = e.target.value;
        }
      } else {
        if (fieldName in formData[h]) {
          formData[h][fieldName] = e.target.value;
        }
      }
    });

    setUser(formData);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldName: string = e.target.name;
    formData.phones[parseInt(fieldName.slice(-1))]["country"] = e.target.value;

    setUser({ ...user, phones: formData.phones });
    // console.log(e.target.value);
  };

  return (
    <div className="h-full flex flex-row p-6">
      <div className="w-3/4 ">
        {headerFields.map((fld, index) => (
          <GroupInput
            propagateData={setChildData}
            key={fld}
            handleSelect={handleSelect}
            phoneHandler={phoneHandler}
            headerField={fld}
            error={error}
            inputFields={formData[fld]}
          ></GroupInput>
        ))}

        <button
          className="bg-custom-ater-500 block w-1/6 mx-auto hover:bg-blue-700 
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
