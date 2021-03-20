import React, { useReducer, useState } from "react";
import validate from "../Validator";
import GroupInput from "./group.input.component";

interface Props {
  formData: any;
  schema: any;
}

const Form = (props: Props) => {
  const { formData, schema } = props;

  const [textMessage, setTexMessage] = useState("Submission data will be here");
  // const [user, dispatch] = useReducer((user: any) => user, formData);

  const [user, setUser] = useState(formData);

  const inputFields: Array<any> = Object.values(formData);
  const headerFields: Array<any> = Object.keys(formData);

  console.log(inputFields);
  console.log(headerFields);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    const allCheck = validate(user, schema);

    allCheck
      ? setTexMessage("Validation Error")
      : setTexMessage(JSON.stringify(user, null, 2));
    e.preventDefault();
  };

  const setChildData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: any = e.target.name;

    headerFields.forEach((h: any) => {
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
            inputFields={Object.keys(inputFields[index])}
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
