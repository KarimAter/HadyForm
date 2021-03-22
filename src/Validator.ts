import { phones } from "./types/BuilderTyper";

export interface IError {
  error: boolean;
  errorMessage: string;
}
export const validate = (user: any, schema: any): Map<string, IError> => {
  let finalError = new Map<string, IError>();

  let dataFields: [] = Object.assign([], ...[...Object.values(user)]);

  for (const groupField in user) {
    const dataFields: any = user[groupField];

    if (Array.isArray(dataFields)) {
      dataFields.forEach((element: any, index: number) => {
        for (const dataField in element) {
          let data: string;
          data = element[dataField];
          switch (schema[dataField]) {
            case "country":
              finalError.set(`${dataField}_${index}`, validateCountry(data));
              break;
            case "number":
              finalError.set(`${dataField}_${index}`, validateNumber(data));
              break;
          }
        }
      });
    } else {
      for (const dataField in dataFields) {
        let data: string;

        data = dataFields[dataField];
        switch (schema[dataField]) {
          case "text":
            finalError.set(dataField, validateText(data));
            break;
          case "email":
            finalError.set(dataField, validateEmail(data));
            break;
          case "password":
            finalError.set(dataField, validatePassword(data));

            break;
          case "number":
            finalError.set(dataField, validateNumber(data));
            break;
          case "country":
            finalError.set(dataField, validateCountry(data));
            break;

          default:
            break;
        }
      }
    }
  }

  return finalError;
};

const validateText = (p: string): IError => {
  if (p === "") return { error: true, errorMessage: "field is empty" };
  return { error: false, errorMessage: "" };
};

const validateEmail = (p: string): IError => {
  if (!p.includes("@")) return { error: true, errorMessage: "field is empty" };
  return { error: false, errorMessage: "" };
};

const validatePassword = (p: string): IError => {
  if (p === "") return { error: true, errorMessage: "field is empty" };
  return { error: false, errorMessage: "" };
};

const validateNumber = (p: string): IError => {
  if (isNaN(parseInt(p)))
    return { error: true, errorMessage: "field is empty" };
  return { error: false, errorMessage: "" };
};

const validateCountry = (p: string): IError => {
  if (p === "")
    return { error: true, errorMessage: "Please Select Country..." };
  return { error: false, errorMessage: "" };
};
export default validate;
