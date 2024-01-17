import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { InputGroup, Button } from "react-bootstrap";
import { BaseInputWrapper } from "./BaseInputWrapper";
import { ControlTypeParameters } from "../config/ControlTypeParameters";
import { Helpers } from "../helpers/functions/Helpers";
import { CopyButton } from "../components/micro-components/CopyButton";
import ConfirmActionModal from "../components/components/ConfirmActionModal";
import { Input } from "../inputs";
import InputValidator from "../helpers/hooks/InputValidator";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import RenderInputActions from "../helpers/functions/RenderInputActions";
import Config from "../config/Config";
import useInputChangeHandler from "../helpers/hooks/HandleInputChange";

const config = new Config();
//The below should be in its file and have default states already set up.  Search "TODO OPTIONS" for related.
const BoltInput = ({
  label,
  placeholder,
  controlType,
  value: propValue,
  name,
  helper_text,
  isInvalid,
  onBlur,
  type,
  onChange,
  errorMessageIfInvalid,
  min,
  max,
  minCharacters,
  returnformat,
  maxCharacters,
  children,
  step,
  id,
  allowHide,
  copy,
  copyValue,
  actions,
  rows,
  minRows,
  hiddenValue,
  as,
  size,
  checked,
  floatingLabel,
  showDefaultValidator = false,
  tooltip_text,
  htmlFor,
  noLabel,
  pre_text,
  column,
  aria_label,
  aria_labelledby,
  aria_describedby,
  required,
  post_text,
  options,
  validation,
  disabled,
  textIfTrue,
  textIfFalse,
  multiple,
  readOnly,
  clearable,
  cyId,
  acceptedFileTypes,
  ...props
}) => {
  const {
    default_placeholder,
    default_name,
    html_type,
    default_label,
    input_classes,
    default_value,
    input_group_classes,
    prevent_spaces,
    default_helper_text,
  } = ControlTypeParameters[controlType || "text"];

  // State
  const [copied, setCopied] = useState(false);
  let [value, setValue] = useState(propValue || "");
  const [modal, setModal] = useState(false);
  const [validationCheck, setValidationCheck] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [files, setFiles] = useState(null);

  // Default values for various props
  id = id || Helpers.ToKebabCase(label || default_label);
  label = label || default_label;
  helper_text = helper_text || default_helper_text;
  cyId = Helpers.ToKebabCase(`cy-${id}`);
  controlType = controlType || "text";
  placeholder = placeholder || default_placeholder;
  isInvalid = isInvalid || !validationCheck;
  name = name || default_name;
  type = type || html_type;
  value = value || null;
  disabled = disabled || false;
  aria_label = placeholder;
  aria_labelledby = `${id}-label`;
  aria_describedby = helper_text ? helper_text : `${id}-describe`;
  returnformat = returnformat || "default";

  const [className, setClassName] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(true);

  // Function to toggle the visibility of the input
  const toggleInputVisibility = () => {
    setIsInputVisible((prevState) => !prevState);
  };

  useEffect(() => {
    // Compute the className based on hiddenValue or isInputVisible
    const hideClasses =
      hiddenValue || !isInputVisible ? "hidden-dots-input" : "";
    const newClassName = `${hideClasses} ${input_classes}`.trim();
    // Update the className state
    setClassName(newClassName);
  }, [hiddenValue, isInputVisible]);

  // Effect to synchronize state with props
  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  // Handler for keyDown event
  const handleKeyDown = (e) => {
    if (prevent_spaces && e.key === " ") {
      e.preventDefault();
    }
  };

  const { handleInputChange } = useInputChangeHandler(
    setValue,
    setFiles,
    onChange,
    prevent_spaces,
    Helpers,
    controlType
  );

  // // Handler for selection from dropdown
  // const handleSelect = (eventKey) => {
  //   console.log("Selected Value: ", eventKey);
  //   setValue(eventKey);
  // };

  // // Generalized input change handler // There is already a function like this in the BaseInputWrapper; can use it
  // const handleInputChange = (e) => {
  //   const { type, checked, value: inputValue } = e.target;
  //   const finalValue =
  //     type === "checkbox" || type === "switch"
  //       ? checked
  //       : prevent_spaces
  //       ? Helpers.removeSpaces(inputValue)
  //       : inputValue;

  //   setValue(finalValue);
  //   onChange?.(e, finalValue);
  // };

  // const handleFileChange = (e) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   // console.log("Selected files:", selectedFiles);
  //   if (selectedFiles.length > 0) {
  //     setValue(selectedFiles); // Assuming setValue is designed to handle an array
  //     setFiles(selectedFiles); // Update the state with the selected files

  //     // If there's an additional onChange handler passed as a prop, call it with all selected files
  //     if (onChange) {
  //       onChange(selectedFiles);
  //     }
  //   }
  // };

  // Handlers for focus and blur events
  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => {
    setIsInputFocused(false);
    setValue(prevent_spaces ? Helpers.removeSpaces(value) : value);
    setTouched(!!value);
  };

  // Combining custom and passed onBlur handlers
  const combinedOnBlurHandler = (event) => {
    handleInputBlur();
    onBlur?.(event);
  };

  InputValidator(
    controlType,
    value,
    touched,
    setValidationCheck,
    setValidationMessage,
    isInvalid,
    showDefaultValidator
  );
  //The below should be in its file and have default states already set up.  Search "TODO OPTIONS" for related.
  const defaultProps = {
    type,
    name,
    controlType,
    value: value,
    placeholder,
    isInvalid,
    default_value,
    hiddenValue,
    rows,
    step,
    options,
    onBlur: combinedOnBlurHandler,
    onFocus: handleInputFocus,
    onChange: handleInputChange,
    minRows: minRows,
    checked: value,
    validationCheck,
    size: size,
    allowHide,
    id: id,
    column,
    clearable: clearable,
    aria_label,
    aria_labelledby,
    aria_describedby,
    min: min,
    max: max,
    minCharacters,
    maxCharacters,
    tooltip_text,
    htmlFor,
    noLabel,
    disabled,
    onKeyDown: handleKeyDown,
    required,
    prevent_spaces: prevent_spaces,
    className: className,
    cyId: cyId,
    multiple,
    readOnly,
    acceptedFileTypes,
  };

  const controlMapping = {
    text: <Input.String {...defaultProps} />,
    email: <Input.String {...defaultProps} />,
    color: <Input.String {...defaultProps} />,
    password: <Input.String {...defaultProps} />,
    textarea: <Input.String {...defaultProps} />,
    url: <Input.String {...defaultProps} />,
    select: <Input.Select {...defaultProps} />,
    switch: <Input.Boolean {...defaultProps} />,
    checkbox: <Input.Boolean {...defaultProps} />,
    number: <Input.Number {...defaultProps} />,
    file: <Input.File {...defaultProps} />,
    video: <Input.File {...defaultProps} />,
    image: <Input.File {...defaultProps} />,
    csv: <Input.File {...defaultProps} />,
    excel: <Input.File {...defaultProps} />,
    range: <Input.Range {...defaultProps} />,
    // date_time: <Input.TimeAndDate />,
    // date_picker: <Input.TimeAndDate />,
    // date: <Input.TimeAndDate />,
    // slider: <Input.Slider />,
  };

  const control = controlMapping[controlType] || "Unknown control type";

  // BaseInputWrapper Component
  const baseInputWrapperProps = {
    label,
    id,
    helper_text,
    touched,
    required,
    isInvalid,
    controlType,
    errorMessageIfInvalid,
    min,
    max,
    clearable,
    minCharacters,
    maxCharacters,
    value,
    checked,
    noLabel,
    floatingLabel,
    tooltip_text,
    validationCheck,
    validationMessage,
    textIfTrue,
    textIfFalse,
    files,
    column,
    ...props,
  };

  return (
    <BaseInputWrapper {...baseInputWrapperProps}>
      <InputGroup className={`${input_group_classes}`}>
        {pre_text ? (
          <InputGroup.Text className={className} id={id}>
            {pre_text}
          </InputGroup.Text>
        ) : null}

        {floatingLabel ? (
          <FloatingLabel label={label}>{control}</FloatingLabel>
        ) : (
          <>{control}</>
        )}

        {post_text ? (
          <InputGroup.Text className={className} id={id}>
            {post_text}
          </InputGroup.Text>
        ) : null}

        {/* Render each action as a button */}
        {RenderInputActions({ actions })}

        {/* //Not set up yet */}
        {clearable && (
          <Button
            onClick={(e) => {
              setValue("");
              clearInput;
            }}
          >
            Clear
          </Button>
        )}

        {copy && (
          <CopyButton
            value={
              controlType === "select" ? copyValue || value : copyValue || value
            }
            onCopy={() => setCopied(true)}
          />
        )}

        {allowHide && (
          <Button
            variant="light"
            className={`${className}`}
            onClick={() => toggleInputVisibility(!isInputVisible)}
            aria-label={isInputVisible ? "Hide input" : "Show input"}
          >
            <FeatherIcon
              icon={isInputVisible ? "eye" : "eye-off"}
              size="16px"
            />
          </Button>
        )}

        {children}
      </InputGroup>
      {modal && (
        <ConfirmActionModal
          title={modal.actionText}
          onAction={modal.action}
          onCancel={() => setModal(false)}
          type="delete"
        />
      )}
    </BaseInputWrapper>
  );
};

export { BoltInput };
