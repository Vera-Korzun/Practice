import React from "react";

const Select = ({ sets, onChange }) => {
  const { title, name, options } = sets;
  return (
    <label>
      {title}
      <select name={name} onChange={onChange}>
        {options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
