// Define an interface for the properties
export interface InputProperty {
  prop: string;
  dataType: "switch" | "text" | "number";
  default_value: string | number | boolean | null;
  standard: boolean;
  description: string;
}

//The below should be in its file and have default states already set up.  Search "TODO OPTIONS" for related.
// Use the interface for the array
const inputProperties: InputProperty[] = [
  { prop: "isInvalid", dataType: "switch", default_value: false, standard: false, description: "Indicates whether the input is in an invalid state." },
  { prop: "copy", dataType: "switch", default_value: false, standard: false, description: "Determines whether to copy the input value to the clipboard." },
  { prop: "noLabel", dataType: "switch", default_value: false, standard: false, description: "Controls whether to display a label for the input field." },
  { prop: "hiddenValue", dataType: "switch", default_value: false, standard: false, description: "Determines whether the input value is hidden or not." },
  { prop: "disabled", dataType: "switch", default_value: false, standard: false, description: "Disables the input field if set to true." },
  { prop: "required", dataType: "switch", default_value: false, standard: false, description: "Indicates whether the input is required to be filled." },
  { prop: "plaintext", dataType: "switch", default_value: false, standard: false, description: "Sets the input to a plaintext mode, disabling interactions." },
  { prop: "floatingLabel", dataType: "switch", default_value: false, standard: false, description: "Enables a floating label for the input field." },
  { prop: "allowHide", dataType: "switch", default_value: false, standard: false, description: "Adds a button to toggle visibility of the input. Note: this works independently from hiddenValue and hiddenValue will overwrite the visibility if set to true. " },
  { prop: "showDefaultValidator", dataType: "switch", default_value: false, standard: false, description: "Shows the default validation for the input." },
  { prop: "multiple", dataType: "switch", default_value: false, standard: false, description: "Allows multiple selections in the input (e.g., for multi-select)." },
  { prop: "readOnly", dataType: "switch", default_value: false, standard: false, description: "Makes the input field read-only if set to true." },
  { prop: "column", dataType: "text", default_value: "", standard: false, description: "Set a column size for the input. Use the Bootstrap column size 1 to 12. You can also pass in responsive values like sm-6 or xl-3." },
  { prop: "placeholder", dataType: "text", default_value: "", standard: false, description: "Sets a placeholder text for the input field." },
  { prop: "errorMessageIfInvalid", dataType: "text", default_value: "", standard: false, description: "Defines the error message to display if the input is invalid." },
  { prop: "modal", dataType: "text", default_value: "", standard: false, description: "Specifies the modal where the input should be used." },
  { prop: "label", dataType: "text", default_value: "", standard: false, description: "Sets the label text for the input field." },
  { prop: "helper_text", dataType: "text", default_value: "", standard: false, description: "Provides helper text or instructions for the input." },
  { prop: "copyValue", dataType: "text", default_value: "", standard: false, description: "Specifies the value to copy to the clipboard." },
  { prop: "tooltip_text", dataType: "text", default_value: "", standard: false, description: "Defines the tooltip text for the input." },
  { prop: "pre_text", dataType: "text", default_value: "", standard: false, description: "Specifies text to display before the input value." },
  { prop: "post_text", dataType: "text", default_value: "", standard: false, description: "Specifies text to display after the input value." },
  { prop: "actions", dataType: "text", default_value: "", standard: false, description: "Specifies actions or behaviors associated with the input." },
  { prop: "size", dataType: "text", default_value: "", standard: false, description: "Sets the size or dimensions of the input." },
  { prop: "options", dataType: "text", default_value: "", standard: false, description: "Specifies options or choices for the input." },
  { prop: "textIfTrue", dataType: "text", default_value: "", standard: false, description: "Specifies text to display if the input value is true." },
  { prop: "textIfFalse", dataType: "text", default_value: "", standard: false, description: "Specifies text to display if the input value is false." },
  { prop: "rows", dataType: "number", default_value: null, standard: false, description: "Defines the number of rows for a multi-line input." },
  { prop: "min", dataType: "number", default_value: null, standard: false, description: "Sets the minimum value for a numeric input." },
  { prop: "max", dataType: "number", default_value: null, standard: false, description: "Sets the maximum value for a numeric input." },
  { prop: "minRows", dataType: "number", default_value: null, standard: false, description: "Defines the minimum number of rows for a multi-line input." },
  { prop: "step", dataType: "number", default_value: null, standard: false, description: "Specifies the step size for numeric inputs." },
  { prop: "minCharacters", dataType: "number", default_value: null, standard: false, description: "Sets the minimum number of characters required for text inputs." },
  { prop: "maxCharacters", dataType: "number", default_value: null, standard: false, description: "Sets the maximum number of characters allowed for text inputs." },
  { prop: "value", dataType: "text", default_value: "", standard: false, description: "Sets the initial value for the input field." }
  
  
];

export default inputProperties;
