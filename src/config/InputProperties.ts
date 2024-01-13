// Define an interface for the properties
export interface InputProperty {
  prop: string;
  dataType: "switch" | "text" | "number";
}

// Use the interface for the array
const inputProperties: InputProperty[] = [
  { prop: "isInvalid", dataType: "switch" },
  { prop: "copy", dataType: "switch" },
  { prop: "noLabel", dataType: "switch" },
  { prop: "hiddenValue", dataType: "switch" },
  { prop: "disabled", dataType: "switch" },
  { prop: "required", dataType: "switch" },
  { prop: "floatingLabel", dataType: "switch" },
  { prop: "showDefaultValidator", dataType: "switch" },
  { prop: "multiple", dataType: "switch" },
  { prop: "readOnly", dataType: "switch" },
  { prop: "placeholder", dataType: "text" },
  { prop: "errorMessageIfInvalid", dataType: "text" },
  { prop: "modal", dataType: "text" },
  { prop: "label", dataType: "text" },
  { prop: "helper_text", dataType: "text" },
  { prop: "copyValue", dataType: "text" },
  { prop: "tooltip_text", dataType: "text" },
  { prop: "pre_text", dataType: "text" },
  { prop: "post_text", dataType: "text" },
  { prop: "actions", dataType: "text" },
  { prop: "size", dataType: "text" },
  { prop: "options", dataType: "text" },
  { prop: "textIfTrue", dataType: "text" },
  { prop: "textIfFalse", dataType: "text" },
  { prop: "rows", dataType: "number" },
  { prop: "min", dataType: "number" },
  { prop: "max", dataType: "number" },
  { prop: "minRows", dataType: "number" },
  { prop: "step", dataType: "number" },
  { prop: "minCharacters", dataType: "number" },
  { prop: "maxCharacters", dataType: "number" },
];

export default inputProperties;
