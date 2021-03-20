import Form from "./components/form";
import { fullName, credentials, phones } from "./types/BuilderTyper";
interface Props {}
interface userData {
  name: fullName;
  creds: credentials;
  phones: phones;
}

const App = (props: Props) => {
  const user: userData = {
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
