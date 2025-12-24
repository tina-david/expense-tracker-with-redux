import React from "react";

function Input({
  type = "text",
  id,
  label,
  value,
  onChange,
  placeholder = "",
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >{label}</label>
      )}
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:border-blue-500 "
      />
    </div>
  );
}

export default Input;
