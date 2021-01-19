import React from "react";

const Input = ({
  title,
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <label>
      {title && title}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
