import React from "react";
import { Form } from "react-bootstrap";

const Boolean = ({
  label,
  placeholder,
  value,
  name,
  helper_text,
  isInvalid,
  onBlur,
  type,
  onChange,
  errorMessageIfInvalid,
  controlType,
  minCharacters,
  maxCharacters,
  children,
  hiddenValue,
  flush,
  handleSelect,
  options,
  id,
  copy,
  onFocus,
  copyValue,
  actions,
  default_value,
  className,
  cyId,
  rows,
  minRows,
  inputRef,
  checked,
  ...props
}) => {
  const renderInput = () => {
    switch (controlType) {
      case "checkbox":
        return (
          <Form.Check
            className={`${className}`}
            type={type}
            name={name}
            cyId={cyId}
            value={value}
            isInvalid={isInvalid}
            onBlur={onBlur}
            onChange={onChange}
            checked={checked}
            id={id}
            aria-labelledby={`${id}-label`}
            aria-describedby={helper_text ? `${id}-describe` : ""}
            {...props}
          />
        );
      case "switch":
        return (
          <Form.Switch
            type={type || html_type}
            name={name}
            cyId={cyId}
            isInvalid={isInvalid}
            onBlur={onBlur}
            onChange={onChange}
            className={`${className}`}
            checked={checked ?? default_value}
            id={id || elementId}
            aria-labelledby={`${id}-label`}
            aria-describedby={helper_text ? `${id}-describe` : ""}
            {...props}
          />
        );

      // Add more cases for different control types if needed
      default:
        return null;
    }
  };

  return renderInput();
};

export { Boolean };
