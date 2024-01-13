import React from "react";
import { Form } from "react-bootstrap";

const DateInput = ({
  label,
  placeholder,
  value,
  name,
  helper_text,
  isInvalid,
  default_value,
  onBlur,
  type,
  onChange,
  errorMessageIfInvalid,
  controlType,
  minCharacters,
  maxCharacters,
  children,
  flush,
  id,
  copy,
  copyValue,
  actions,
  className,
  cyId,
  ...props
}) => {
  return (
    <Form.Control
      type={type}
      name={name}
      cyId={cyId}
      value={value}
      placeholder={placeholder}
      isInvalid={isInvalid}
      onBlur={onBlur}
      minLength={minCharacters}
      maxCharacters={maxCharacters}
      onChange={onChange}
      className={className}
      {...props}
      id={id}
      aria-labelledby={`${id}-label`}
      aria-describedby={helper_text ? `${id}-describe` : ""}
    />
  );
};

export { DateInput };
