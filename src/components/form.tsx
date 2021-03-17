import React, { useReducer } from "react";
import GroupInput from "./group.input.component";
import userData from "../types/fullName";

interface Props {
  user: userData;
}

const Form = (props: Props) => {
  const { user: initialuser } = props;
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(user);
    e.preventDefault();
  };
  const inputFields: Array<any> = Object.values(initialuser);
  const headerFields: Array<any> = Object.keys(initialuser);

  function reducer(user: userData, action: any): userData {
    switch (action.type) {
      case "firstName":
        return {
          userName: { ...user.userName, firstName: action.payload },
          userCreds: { ...user.userCreds },
        };
      case "middleName":
        return {
          userName: { ...user.userName, middleName: action.payload },
          userCreds: { ...user.userCreds },
        };
      case "lastName":
        return {
          userName: { ...user.userName, lastName: action.payload },
          userCreds: { ...user.userCreds },
        };
      case "email":
        return {
          userName: { ...user.userName },
          userCreds: { ...user.userCreds, email: action.payload },
        };
      case "password":
        return {
          userName: { ...user.userName },
          userCreds: { ...user.userCreds, password: action.payload },
        };
      default:
        return user;
    }
  }

  const [user, dispatch] = useReducer(reducer, initialuser);

  const setChildData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const field: any = {};
    field[fieldName] = e.target.value;
    dispatch({ type: fieldName, payload: field[fieldName] });
  };
  return (
    <div>
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
