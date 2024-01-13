import { useEffect } from "react";
import { ControlTypeParameters } from "../../config/ControlTypeParameters";
import { Validators } from "../Validators";

const InputValidator = (
  controlType = "text",
  value,
  touched,
  setValidationCheck,
  setValidationMessages, // Renamed to plural
  isInvalid,
  showDefaultValidator
) => {
  const { validators } = ControlTypeParameters[controlType || null];

  // Uncomment to see logs
  // console.log("validators", validators);

  useEffect(() => {
    if (!showDefaultValidator) return;
    let isValid = true;
    let messages = [];

    if (
      showDefaultValidator &&
      touched &&
      value &&
      validators &&
      Array.isArray(validators)
    ) {
      validators.forEach((validator) => {
        const validate = Validators[validator];
        if (typeof validate === "function") {
          const validationResult = validate(value);
          if (!validationResult.valid) {
            isValid = false;
            messages.push(validationResult.message);
          }
        }
      });
    }

    setValidationCheck(isValid);
    isInvalid = true;
    setValidationMessages(messages); // Set the array of messages
  }, [
    value,
    touched,
    validators,
    setValidationCheck,
    setValidationMessages,
    isInvalid,
  ]);
};

export default InputValidator;
