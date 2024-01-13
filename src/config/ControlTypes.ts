// Define an interface for the control types
export interface ControlType {
  type:
    | "text"
    | "number"
    | "email"
    | "textarea"
    | "url"
    | "checkbox"
    | "switch"
    | "color"
    | "select"
    | "range"
    | "file";
}

const ControlTypes: ControlType[] = [
  { type: "text" },
  { type: "number" },
  { type: "email" },
  { type: "textarea" },
  { type: "url" },
  { type: "checkbox" },
  { type: "switch" },
  { type: "color" },
  { type: "select" },
  { type: "range" },
  { type: "file" },
];

export default ControlTypes;
