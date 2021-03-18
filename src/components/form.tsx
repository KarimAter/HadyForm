import React, { useReducer, useState } from "react";
import GroupInput from "./group.input.component";

interface Props {
  formData: any;
  schema: any;
}

const Form = (props: Props) => {
  const { formData, schema } = props;

  const inputFields: Array<any> = Object.values(formData);
  const headerFields: Array<any> = Object.keys(formData);

  const [textMessage, setTexMessage] = useState("");

  const handleTextMessage = (e: any) => {};

  const validateText = (p: string): boolean => {
    return p === "" ? true : false;
  };

  const validateEmail = (p: string): boolean => {
    return !p.includes("@");
  };

  const validatePassword = (p: string): boolean => {
    return p === "" ? true : false;
  };

  const validateNumber = (p: string): boolean => {
    return isNaN(parseInt(p)) ? true : false;
  };

  const validate = (user: any): Array<boolean> => {
    let finalError: Array<boolean> = [];

    let dataFields = Object.assign([], ...[...Object.values(user)]);
    console.log(dataFields);

    for (let k in dataFields) {
      let data: any;
      if (dataFields[k]["initialData"] === undefined) data = dataFields[k];
      else data = dataFields[k]["initialData"];
      switch (schema[k]) {
        case "text":
          finalError.push(validateText(data));
          break;
        case "email":
          finalError.push(validateEmail(data));
          break;
        case "password":
          finalError.push(validatePassword(data));

          break;
        case "number":
          finalError.push(validateNumber(data));
          break;

        default:
          break;
      }
    }

    return finalError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    let allCheck: boolean = false;
    const finalError = validate(user);
    console.log(user);
    finalError.forEach((b) => (allCheck = allCheck || b));

    allCheck
      ? setTexMessage("Validation Error")
      : setTexMessage(JSON.stringify(user, null, 2));
    e.preventDefault();
  };
  const [user, dispatch] = useReducer((user: any) => user, formData);

  const setChildData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: any = e.target.name;

    headerFields.forEach((h: any) => {
      if (fieldName in formData[h]) {
        formData[h][fieldName] = e.target.value;
      }
    });
    dispatch();
  };

  return (
    <div className="h-full flex flex-col">
      {headerFields.map((fld, index) => (
        <GroupInput
          error={""}
          submitData={setChildData}
          key={fld}
          headerField={fld}
          inputFields={Object.keys(inputFields[index])}
        ></GroupInput>
      ))}

      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      <textarea
        className="h-1/4 bg-indigo-400"
        value={textMessage}
        onChange={handleTextMessage}
      />
    </div>
  );
};

export default Form;
