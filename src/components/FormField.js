import React from "react";

function FormField({ label, type, name, placeholder, value, onChange, data }) {
  return (
    <fieldset>
      <label>{label}</label>
      <div>
        {type === "select" ? (
          <select name={name} value={value} onChange={onChange}>
            {placeholder && <option value="">{placeholder}</option>}
            {data.map((item, index) => (
              <option key={index} value={item.disease}>
                {item.disease}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </fieldset>
  );
}

export default FormField;
