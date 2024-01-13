import React, { useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Form, Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import { TestData } from "../data/TestData";

const String = ({
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
  className,
  cyId,
  rows,
  minRows,
  inputRef,
  aria_describedby,
  aria_labelledby,
  ...props
}) => {
  // Uncomment to see logs
  // console.log("Value in text file:", value, "Name text:", name, "Placeholder text:", placeholder, "Ref in text input:", inputRef);

  // Use default colors if no options are provided or if the options array is empty
  const colorOptions =
    options && options.length > 0 ? options : TestData.defaultColors;

  const renderInput = () => {
    switch (controlType) {
      case "text":
        return (
          <Form.Control
            type={type}
            name={name}
            cyId={cyId}
            ref={inputRef}
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
            aria_labelledby={aria_labelledby}
            aria-describedby={aria_describedby}
          />
        );
      case "password":
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        type = isPasswordVisible ? "text" : "password";
        hiddenValue = isPasswordVisible;
        const icon = isPasswordVisible ? "eye" : "eye-off";
        return (
          <InputGroup>
            <Form.Control
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              isInvalid={isInvalid}
              onBlur={onBlur}
              minCharacters={minCharacters}
              maxCharacters={maxCharacters}
              onChange={onChange}
              id={id}
              cyId={cyId}
              aria_labelledby={aria_labelledby}
              aria-describedby={aria_describedby}
              className={className}
              {...props}
            />
            <Button
              variant="light"
              className="border aic"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              <FeatherIcon icon={icon} size="16px" />
            </Button>
          </InputGroup>
        );
      case "email":
        return (
          <Form.Control
            type={type}
            name={name}
            value={value}
            cyId={cyId}
            minCharacters={minCharacters}
            maxCharacters={maxCharacters}
            placeholder={placeholder}
            isInvalid={isInvalid}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            id={id}
            aria_labelledby={aria_labelledby}
            aria-describedby={aria_describedby}
            className={className}
            {...props}
          />
        );
      case "color":
        return (
          <>
            <div className="d-flex gap-2">
              <div>
                <DropdownButton
                  variant="outline-secondary"
                  title={value || "Select a color"}
                  id="input-group-dropdown-1"
                  onSelect={handleSelect}
                  onChange={onChange}
                >
                  {colorOptions.map((option, index) => (
                    <Dropdown.Item key={index} eventKey={option.value}>
                      <div className="d-flex aic gap-3">
                        <div
                          className="border rounded"
                          style={{
                            backgroundColor: option.value,
                            minHeight: "30px", // or any other value that suits your design
                            minWidth: "40px",
                            height: "30px",
                            width: "40px",
                          }}
                        ></div>
                        <div>{option.value}</div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>

              <div>
                <Form.Control
                  className="p-0 rounded-end"
                  type={type}
                  cyId={cyId}
                  name={name}
                  value={value || "#4560ff"}
                  onChange={onChange}
                  onBlur={onBlur}
                  isInvalid={isInvalid}
                  id={id}
                  aria_labelledby={aria_labelledby}
                  aria-describedby={aria_describedby}
                  {...props}
                />
              </div>
            </div>
          </>
        );
      case "url":
        return (
          <>
            <Form.Control
              type={type}
              name={name}
              value={value}
              cyId={cyId}
              placeholder={placeholder}
              isInvalid={isInvalid}
              minCharacters={minCharacters}
              maxCharacters={maxCharacters}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={onChange}
              id={id}
              aria_labelledby={aria_labelledby}
              aria-describedby={aria_describedby}
              className={className}
              {...props}
            />
          </>
        );
      case "textarea":
        return (
          // Additional textarea specific properties can be included here
          <Form.Control
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            isInvalid={isInvalid}
            rows={rows}
            cyId={cyId}
            minCharacters={minCharacters}
            maxCharacters={maxCharacters}
            onBlur={onBlur}
            onChange={onChange}
            as={TextareaAutosize}
            minRows={minRows || 3}
            className={className}
            id={id}
            aria_labelledby={aria_labelledby}
            aria-describedby={aria_describedby}
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

export { String };
