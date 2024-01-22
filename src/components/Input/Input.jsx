import React from "react";
import "./Input.scss";
const Input = ({ value, onChange }) => {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
