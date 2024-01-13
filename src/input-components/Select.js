import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const SelectInput = ({
  label,
  placeholder,
  value: propValue,
  name,
  helper_text,
  default_value,
  isInvalid,
  elementId,
  onBlur,
  type,
  size,
  className,
  onChange,
  errorMessageIfInvalid,
  children,
  controlType,
  id,
  copy,
  copyValue,
  cyId,
  options,
  actions,
  ...props
}) => {
  // State
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  return (
    <Form.Select
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      isInvalid={isInvalid}
      size={size}
      onBlur={onBlur}
      options={options}
      onChange={onChange}
      className={className}
      cyId={cyId}
      id={elementId}
      aria-labelledby={`${elementId}-label`}
      aria-describedby={helper_text ? `${elementId}-describe` : ""}
      {...props}
    >
      {Array.isArray(options) && options.length > 0 ? (
        options.map((option, index) => (
          <option
            key={index}
            value={
              typeof option === "string" ? option.toLowerCase() : option.value
            }
          >
            {typeof option === "string"
              ? option.charAt(0).toUpperCase() + option.slice(1)
              : option.label}
          </option>
        ))
      ) : (
        <option>{"No available options"}</option>
      )}
    </Form.Select>
  );
};

export { SelectInput };
