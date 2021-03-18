import React from "react";
import Form from "./components/form";
import { fullName, credentials, phones, inputType } from "./types/BuilderTyper";
interface Props {}
interface userData {
  name: fullName;
  creds: credentials;
  phones: phones;
}

const App = (props: Props) => {
  const user: userData = {
    name: {
      firstName: { type: "text", initialData: "" },
      middleName: { type: "text", initialData: "" },
      lastName: { type: "text", initialData: "" },
    },
    creds: {
      email: { type: "email", initialData: "" },
      password: { type: "password", initialData: "" },
    },
    phones: {
      country: { type: "number", initialData: "" },
      mobile: { type: "number", initialData: "" },
    },
  };

  const schema = {
    firstName: "text",
    middleName: "text",
    lastName: "text",
    email: "email",
    password: "password",
    country: "number",
    mobile: "number",
  };

  return (
    <div className="h-screen flex-col text-gray-700 justify-center items-center">
      <h2 className="mb-4 text-center"> Hady Form</h2>
      <Form formData={user} schema={schema}></Form>
    </div>
  );
};

export default App;

// const backUser: any = {
//   name: {
//     firstName: "",
//     middleName: "",
//     lastName: "",
//   },
//   creds: {
//     email: "",
//     password: "",
//   },
//   phones: {
//     country: "",
//     mobile: "",
//   },
// };

// const parser = JSON.stringify(backUser);
// console.log(JSON.stringify(backUser, null, 2));
