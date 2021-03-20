export const validate = (user: any, schema: any): boolean => {
  let finalError: Array<boolean> = [];

  let dataFields = Object.assign([], ...[...Object.values(user)]);
  console.log(dataFields);

  for (let k in dataFields) {
    let data: any;
    // if (dataFields[k]["initialData"] === undefined) data = dataFields[k];
    // else data = dataFields[k]["initialData"];

    data = dataFields[k];
    switch (schema[k]) {
      case "text":
        finalError.push(validateText(data));
        break;
      case "email":
        finalError.push(validateEmail(data));
        break;
      case "password":
        finalError.push(validatePassword(data));

        break;
      case "number":
        finalError.push(validateNumber(data));
        break;

      default:
        break;
    }
  }

  let allCheck: boolean = false;

  finalError.forEach((b) => (allCheck = allCheck || b));

  return allCheck;
};

const validateText = (p: string): boolean => {
  return p === "" ? true : false;
};

const validateEmail = (p: string): boolean => {
  return !p.includes("@");
};

const validatePassword = (p: string): boolean => {
  return p === "" ? true : false;
};

const validateNumber = (p: string): boolean => {
  return isNaN(parseInt(p)) ? true : false;
};

export default validate;
