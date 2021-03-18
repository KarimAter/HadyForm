export interface fullName {
  firstName: inputType;
  middleName: inputType;
  lastName: inputType;
}

export interface credentials {
  email: inputType;
  password: inputType;
}

export interface phones {
  country: inputType;
  mobile: inputType;
}

export interface inputType {
  type: string;
  initialData: string;
}

export default interface BuilderTyper {
  userName: fullName;
  userCreds: credentials;
  userPhones: phones;
}
