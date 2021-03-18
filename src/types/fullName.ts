export interface fullName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface credentials {
  email: string;
  password: string;
}

export default interface userData {
  userName: fullName;
  userCreds: credentials;
}
