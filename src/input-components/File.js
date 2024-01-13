import React, { useState } from "react";
import { Form } from "react-bootstrap";

// Todo
//-Add prop for min and max file size
//Create a function taht takes in accetpedFileTypes as an array of strings and returns a string of accepted file types

const FileInput = ({
  label,
  placeholder,
  value,
  name,
  helper_text = "Select a file to upload",
  isInvalid,
  default_value,
  onBlur,
  type,
  onChange,
  errorMessageIfInvalid,
  handleFileChange,
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
  acceptedFileTypes,
  multiple,
  ...props
}) => {
  return (
    <>
      <Form.Control
        type={type}
        name={name}
        id={id}
        cyId={cyId}
        value={type !== "file" ? value : undefined} // Prevent React from setting value on file input
        placeholder={placeholder}
        isInvalid={isInvalid}
        onBlur={onBlur}
        minLength={minCharacters}
        maxLength={maxCharacters}
        accept={acceptedFileTypes}
        onChange={handleFileChange} // Use handleFileChange instead of onChange
        className={className}
        multiple={multiple}
        {...props}
        aria-labelledby={`${id}-label`}
        aria-describedby={helper_text ? `${id}-describe` : ""}
      />
    </>
  );
};

export { FileInput };
