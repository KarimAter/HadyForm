import React from "react";
import Form from "./components/form";
import { fullName, credentials } from "../src/types/fullName";
interface Props {}
interface userData {
  name: fullName;
  creds: credentials;
  phones: any;
}

const App = (props: Props) => {
  const user: userData = {
    name: { firstName: "", middleName: "", lastName: "" },
    creds: { email: "", password: "" },
    phones: { country: "", number: "" },
  };

  return (
    <div className="h-screen flex-col text-gray-700 justify-center items-center">
      <h2 className="mb-4 text-center"> Hady Form</h2>
      <Form formData={user}></Form>
    </div>
  );
};

export default App;
