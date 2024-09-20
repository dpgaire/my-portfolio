import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  type = "text",
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  style,
}) => {
  return (
    <div style={style} className="flex flex-col space-y-2 mb-4">
      <label htmlFor={name} className="block text-gray-800 ">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full p-2 border rounded-md ${error && "border-red-500"}`}
      />
      {error && <p className="text-red-500 text-sm text-left mt-1">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default InputField;
