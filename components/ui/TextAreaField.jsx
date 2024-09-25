import React from "react";

const TextAreaField = ({
  placeholder,
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  style,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-800">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        style={style}
        value={value}
        rows="5"
        cols="50"
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full p-2 border rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-left text-sm">{error}</p>}
    </div>
  );
};

export default TextAreaField;
