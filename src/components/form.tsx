import React, { useReducer } from "react";
import GroupInput from "./group.input.component";

interface Props {
  formData: any;
}

const Form = (props: Props) => {
  const formData = props.formData;
  const inputFields: Array<any> = Object.values(formData);
  const headerFields: Array<any> = Object.keys(formData);
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(user);
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
          submitData={setChildData}
          key={fld}
          headerField={fld}
          inputFields={Object.keys(inputFields[index])}
        ></GroupInput>
      ))}

      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Form;
