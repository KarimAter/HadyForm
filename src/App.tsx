// TODO: Change Phones to be Array of Objects (Country Code: Dropdown, Mobile Number) //Done
// TODO: Abilitiy To add dymanic phones on runtime //Done
// TODO: Abilitiy to remove phones on runtime //Done
// TODO: Showing Validation Message for invalid props //Done
// TODO: Setting Minimum Amount Of Phone Number Validation //Done
// TODO: Default Values//Not Done
// TODO: Prefixing Interface With I//Done
// TODO: Pascal Case For React Components//Done
// TODO: camel Case for any typescript file but not component//Done
// TODO: remove .component suffix//Done
// TODO: each file has one interface only (Recommended not required)
// TODO: interfaces be added in folder called models not type//Done
// TODO: move Validation Function to folder named Validation or utils//Done
// TODO: Tailwind add your custom font in tailwind//Done
// TODO: Tailwind add your color palette to tailwind without removing tailwind own colors//Done

import { useState } from "react";
import Form from "./components/FormComp";

import { IName, ICredentials, INumber } from "./Models/Models";

export interface IUserData {
  name: IName;
  creds: ICredentials;
  phones: INumber[];
  [key: string]: any;
}

export type ValidationType =
  | "text"
  | "email"
  | "password"
  | "country"
  | "number";

export interface IValidationObject {
  [key: string]: ValidationType;
}

const App = () => {
  const schema: IValidationObject = {
    firstName: "text",
    middleName: "text",
    lastName: "text",
    email: "email",
    password: "password",
    country: "country",
    mobile: "number",
  };

  const [user, setUser] = useState({
    name: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    creds: {
      email: "",
      password: "",
    },
    phones: [
      {
        country: "",
        mobile: "",
      },
      {
        country: "",
        mobile: "",
      },
    ],
  });

  const phoneHandler = (action: string) => {
    if (action === "add") {
      user.phones.push({
        country: "",
        mobile: "",
      });
    } else {
      if (user.phones.length !== 1) {
        user.phones.pop();
      }
    }
    setUser({
      ...user,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <h2 className="mb-2 text-2xl font-bold text-center bg-green-100 font-ater">
        Hady Form
      </h2>
      <Form formData={user} phoneHandler={phoneHandler} schema={schema}></Form>
    </div>
  );
};

export default App;
