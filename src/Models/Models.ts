export interface IName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface INumber {
  [key: string]: any;
  country: string;
  mobile: string;
}

export interface inputType {
  type: string;
  initialData: string;
}

export default interface BuilderTyper {
  userName: IName;
  userCreds: ICredentials;
  userINumber: INumber;
}
