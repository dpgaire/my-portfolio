import React, { useState, useEffect } from "react";
import { InputField, SubmitButton, TextAreaField } from "../ui";

/**
 * Custom dynamic form component with validation, error handling, and dynamic error removal.
 *
 * @param {Array} config - Array of field configurations for the form.
 * @param {Function} onSubmit - Function to call with form data on successful submission.
 */
const DynamicForm = ({ config, onSubmit, loading, submitText }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    config.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Remove the error for the current field if it's valid
    if (value.trim() !== "") {
      setErrors((prevErrors) => {
        const { [name]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const validateField = (fieldName) => {
    const fieldConfig = config.find((field) => field.name === fieldName);
    if (fieldConfig?.required && !formData[fieldName]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldConfig.label} is required.`,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({});
      setErrors({});
    }
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      placeholder: field.placeholder,
      value: formData[field.name] || formData[field.value],
      onChange: handleChange,
      onBlur: handleBlur,
      error: errors[field.name],
    };

    switch (field.fieldType) {
      case "textarea":
        return <TextAreaField {...commonProps} />;
      default:
        return <InputField {...commonProps} />;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {config.map((field, index) => (
        <div key={index} className="flex flex-col">
          {renderField(field)}
        </div>
      ))}
      <div className="flex flex-start">
        <SubmitButton text={submitText} submitting={loading} />
      </div>
    </form>
  );
};

export default DynamicForm;
