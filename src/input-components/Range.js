import React, { useState, useEffect } from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

const RangeInput = ({
  label,
  placeholder,
  value,
  name,
  helper_text,
  isInvalid,
  default_value,
  elementId,
  onBlur,
  type,
  onChange,
  errorMessageIfInvalid,
  controlType,
  min,
  max,
  children,
  flush,
  step,
  cyId,
  id,
  copy,
  copyValue,
  actions,
  ...props
}) => {
  return (
    <div className="d-flex gap-3 aic w-100">
      <Form.Range
        type={type}
        name={name}
        value={value}
        cyId={cyId}
        step={step}
        placeholder={placeholder}
        isInvalid={isInvalid}
        onBlur={onBlur}
        min={min || 0}
        max={max || 100}
        onChange={onChange}
        className={`${flush ? "form-control-flush" : ""}`}
        {...props}
        id={elementId}
        aria-labelledby={`${elementId}-label`}
        aria-describedby={helper_text ? `${elementId}-describe` : ""}
      />

      <InputGroup.Text className="form-control-flush">
        {value || 0}
      </InputGroup.Text>
    </div>
  );
};

export { RangeInput };
