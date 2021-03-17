import React from "react";
import Form from "./components/form";
import { fullName, credentials } from "../src/types/fullName";
interface Props {}
interface userData {
  userName: fullName;
  userCreds: credentials;
}

const App = (props: Props) => {
  const user: userData = {
    userName: { firstName: "", middleName: "", lastName: "" },
    userCreds: { email: "", password: "" },
  };
  return (
    <div className="h-screen flex-col text-gray-700 justify-center items-center">
      <h2> Hello World</h2>
      <Form user={user}></Form>
    </div>
  );
};

export default App;
