// Import necessary dependencies and components
import React from "react";
import { Form, Col } from "react-bootstrap";
import { Helpers } from "../helpers/functions/Helpers"; // Assuming toPascalCase is a valid function
import { ControlTypeParameters } from "../config/ControlTypeParameters";
import InfoIcon from "../components/micro-components/InfoIcon";
import ListGroup from "react-bootstrap/ListGroup";
import { RenderFilePreviews } from "../helpers/functions/RenderFilePreview";

//The below should be in its file and have default states already set up.  Search "TODO OPTIONS" for related.
const BaseInputWrapper = ({
  label,
  id,
  helper_text,
  errorMessageIfInvalid,
  isInvalid,
  controlType,
  tooltip_text,
  touched,
  modal,
  floatingLabel,
  value,
  htmlFor,
  noLabel,
  minCharacters,
  maxCharacters,
  min,
  max,
  required,
  checked,
  pre_text,
  post_text,
  validation,
  validationCheck,
  validationMessage,
  textIfTrue,
  textIfFalse,
  children,
  files,
  column,
  ...props
}) => {
  const dataType = ControlTypeParameters[controlType]?.data_type;
  const defaultLabel = ControlTypeParameters[controlType]?.default_label;
  const defaultMin = ControlTypeParameters[controlType]?.default_min;
  const defaultMax = ControlTypeParameters[controlType]?.default_max;

  // Set 'label' to its own value or to 'defaultLabel' if 'label' is falsy
  label = label || defaultLabel;
  min = min || defaultMin;
  max = max || defaultMax;

  // Generate unique IDs for various elements based on the 'id' or 'label'
  id = Helpers.ToKebabCase(id || label);
  const elementId = Helpers.ToKebabCase(id);
  const labelId = `${elementId}-label`;
  const describeId = `${elementId}-describe`;

  // Uncomment to see logs
  // console.log(
  //   "Base input wrapper --- Modal:",
  //   modal,
  //   "controlType:",
  //   controlType,
  //   "Files:",
  //   files,
  //   "Data Type:",
  //   dataType,
  //   "modal",
  //   modal,
  //   "tooltip_text:",
  //   tooltip_text,
  //   "elementId:",
  //   elementId,
  //   "labelId:",
  //   labelId,
  //   "describeId:",
  //   describeId,
  // );

  console.log("Column:", column);

  // Return the JSX for the BaseInputWrapper component
  return (
    <Form.Group as={Col} className={`mb-3 col-${column}`} {...props}>
      {noLabel || floatingLabel ? null : (
        <div>
          <Form.Label
            htmlFor={htmlFor || elementId}
            id={labelId}
            className="d-flex align-items-center gap-1 aic"
          >
            <span className="aic d-flex">{label}</span>
            {required && <span className="text-danger">*</span>}
            {(tooltip_text || modal) && (
              <InfoIcon
                tooltipText={tooltip_text}
                modal={modal && modal}
                modalProps={{ body: false }}
              />
            )}
          </Form.Label>
        </div>
      )}

      {children}

      {/* Render any child components passed to BaseInputWrapper */}
      <div className="d-flex flex-column mt-1">
        {isInvalid && (
          <Form.Control.Feedback className="aic d-flex gap-2" type="invalid">
            {errorMessageIfInvalid || "Invalid input"}
          </Form.Control.Feedback>
        )}
        {helper_text && (
          <Form.Text id={describeId} className="mb-0">
            {helper_text}
          </Form.Text>
        )}
        {minCharacters && maxCharacters && (
          <Form.Text id={describeId} className="mb-0">
            {value
              ? value.length < minCharacters
                ? `${minCharacters - value.length} more characters to go`
                : value.length > maxCharacters
                ? `Maximum ${maxCharacters} characters allowed`
                : "Perfect! 👌"
              : null}
          </Form.Text>
        )}

        {validationCheck === false && (
          <ListGroup className="small bg-light">
            {validationMessage.map((message, index) => (
              <ListGroup.Item className="p-3" key={index}>
                {message}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

        {dataType === "boolean" &&
          (value
            ? textIfTrue && <Form.Text>{textIfTrue}</Form.Text>
            : textIfFalse && <Form.Text>{textIfFalse}</Form.Text>)}

        {files ? <RenderFilePreviews files={files} /> : null}
      </div>
    </Form.Group>
  );
};

// Export the BaseInputWrapper component for use in other parts of the application
export { BaseInputWrapper };
