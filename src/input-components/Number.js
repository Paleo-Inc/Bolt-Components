import React from "react";
import { Form } from "react-bootstrap";

const NumberInput = ({
  label,
  placeholder,
  value,
  name,
  helper_text,
  isInvalid,
  default_value,
  id,
  onBlur,
  type,
  onChange,
  errorMessageIfInvalid,
  controlType,
  min,
  max,
  minCharacters,
  maxCharacters,
  children,
  flush,
  cyId,
  copy,
  copyValue,
  actions,
  ...props
}) => {
  return ( 
    <Form.Control
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      isInvalid={isInvalid}
      onBlur={onBlur}
      min={min}
      max={max}
      minCharacters={minCharacters}
      maxCharacters={maxCharacters}
      onChange={onChange}
      className={flush ? "form-control-flush" : ""}
      {...props}
      id={id}
      aria-labelledby={`${id}-label`}
      aria-describedby={helper_text ? `${id}-describe` : ""}
    />
  );
};

export { NumberInput };
