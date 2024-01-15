import React from "react";
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
  aria_describedby,
  aria_labelledby,
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
        min={min}
        max={max}
        onChange={onChange}
        className={`${flush ? "form-control-flush" : ""}`}
        {...props}
        id={elementId}
        aria-labelledby={aria_labelledby}
        aria-describedby={aria_describedby}
      />

      <InputGroup.Text className="form-control-flush">
        {value || 0}
      </InputGroup.Text>
    </div>
  );
};

export { RangeInput };
