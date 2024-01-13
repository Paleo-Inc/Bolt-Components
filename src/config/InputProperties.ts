// Define an interface for the properties
export interface InputProperty {
  prop: string;
  dataType: "switch" | "text" | "number";
  default_value: string | number | boolean | null;
  standard: boolean;
}

//The below should be in its file and have default states already set up.  Search "TODO OPTIONS" for related.
// Use the interface for the array
const inputProperties: InputProperty[] = [
  { prop: "isInvalid", dataType: "switch", default_value: false , standard: false },
  { prop: "copy", dataType: "switch", default_value: false , standard: false },
  { prop: "noLabel", dataType: "switch", default_value: false , standard: false },
  { prop: "hiddenValue", dataType: "switch", default_value: false , standard: false },
  { prop: "disabled", dataType: "switch", default_value: false , standard: false },
  { prop: "required", dataType: "switch", default_value: false , standard: false },
  { prop: "floatingLabel", dataType: "switch", default_value: false , standard: false },
  { prop: "showDefaultValidator", dataType: "switch", default_value: false , standard: false },
  { prop: "multiple", dataType: "switch", default_value: false , standard: false },
  { prop: "readOnly", dataType: "switch", default_value: false , standard: false },
  { prop: "placeholder", dataType: "text", default_value: "" , standard: false },
  { prop: "errorMessageIfInvalid", dataType: "text", default_value: "" , standard: false },
  { prop: "modal", dataType: "text", default_value: "" , standard: false },
  { prop: "label", dataType: "text", default_value: "" , standard: true },
  { prop: "helper_text", dataType: "text", default_value: "" , standard: false },
  { prop: "copyValue", dataType: "text", default_value: "" , standard: false },
  { prop: "tooltip_text", dataType: "text", default_value: "" , standard: false },
  { prop: "pre_text", dataType: "text", default_value: "" , standard: false },
  { prop: "post_text", dataType: "text", default_value: "" , standard: false },
  { prop: "actions", dataType: "text", default_value: "" , standard: false },
  { prop: "size", dataType: "text", default_value: "" , standard: false },
  { prop: "options", dataType: "text", default_value: "" , standard: false },
  { prop: "textIfTrue", dataType: "text", default_value: "" , standard: false },
  { prop: "textIfFalse", dataType: "text", default_value: "" , standard: false },
  { prop: "rows", dataType: "number", default_value: null , standard: false },
  { prop: "min", dataType: "number", default_value: null , standard: false },
  { prop: "max", dataType: "number", default_value: null , standard: false },
  { prop: "minRows", dataType: "number", default_value: null , standard: false },
  { prop: "step", dataType: "number", default_value: null , standard: false },
  { prop: "minCharacters", dataType: "number", default_value: null , standard: false },
  { prop: "maxCharacters", dataType: "number", default_value: null , standard: false },
  { prop: "plaintext", dataType: "switch", default_value: false , standard: false },
  { prop: "value", dataType: "text", default_value: "" , standard: false },
];

export default inputProperties;
