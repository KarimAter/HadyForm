import Form from "./components/form";
import { fullName, credentials, phones } from "./types/BuilderTyper";
interface Props {}

export interface IUserData {
  name: fullName;
  creds: credentials;
  phones: phones;
  [key: string]: any;
}

export type ValidationType = "text" | "email" | "password" | "number";

export interface IValidationObject {
  [key: string]: ValidationType;
}

// TODO: Change Phones to be Array of Objects (Country Code: Dropdown, Mobile Number)
// TODO: Abilitiy To add dymanic phones on runtime
// TODO: Abilitiy to remove phones on runtime
// TODO: Showing Validation Message for invalid props
// TODO: Setting Minimum Amount Of Phone Number Validation
// TODO: Default Values
// TODO: Prefixing Interface With I
// TODO: Pascal Case For React Components
// TODO: camel Case for any typescript file but not component
// TODO: remove .component suffix
// TODO: each file has one interface only (Recommended not required)
// TODO: interfaces be added in folder called models not type
// TODO: move Validation Function to folder named Validation or utils
// TODO: Tailwind add your custom font in tailwind
// TODO: Tailwind add your color palette to tailwind without removing tailwind own colors

const App = (props: Props) => {
  const user: IUserData = {
    name: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    creds: {
      email: "",
      password: "",
    },
    phones: {
      country: "",
      mobile: "",
    },
  };

  const schema: IValidationObject = {
    firstName: "text",
    middleName: "text",
    lastName: "text",
    email: "email",
    password: "password",
    country: "number",
    mobile: "number",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <h2 className="mb-2 text-2xl font-bold text-center bg-green-100">
        Hady Form
      </h2>
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

// const user: userData = {
//   name: {
//     firstName: { type: "text", initialData: "" },
//     middleName: { type: "text", initialData: "" },
//     lastName: { type: "text", initialData: "" },
//   },
//   creds: {
//     email: { type: "email", initialData: "" },
//     password: { type: "password", initialData: "" },
//   },
//   phones: {
//     country: { type: "number", initialData: "" },
//     mobile: { type: "number", initialData: "" },
//   },
// };
