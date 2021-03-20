export interface fullName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface credentials {
  email: string;
  password: string;
}

export interface phones {
  country: string;
  mobile: string;
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
