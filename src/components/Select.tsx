import React from "react";

interface Props {
  handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void;
  id: string;
}

const Select = ({ id, handleSelect }: Props) => {
  return (
    <select name={id} id="countries" onChange={handleSelect}>
      <option value="">Please Select Country...</option>
      <option value="Egypt">Egypt</option>
      <option value="Lebanon">Lebanon</option>
      <option value="USA">USA</option>
      <option value="France">France</option>
    </select>
  );
};

export default Select;
