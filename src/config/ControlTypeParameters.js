class ControlTypeParameters {
  static text = {
    data_type: "string",
    default_label: "Text Input",
    default_placeholder: "Add your text...",
    default_name: "text_default_name",
    html_type: "text",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static textarea = {
    data_type: "string",
    default_label: "Textarea",
    default_placeholder: "Add your long text...",
    default_name: "textarea_default_name",
    html_type: "textarea",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static color = {
    data_type: "string",
    default_label: "Color",
    default_placeholder: "Pick a color...",
    default_name: "color_default_name",
    html_type: "color",
    input_classes: "p-0 w-25",
    input_group_classes: "",
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  //Can be removed , i ended up deleting this control type
  static password = {
    data_type: "string",
    default_label: "Password",
    default_placeholder: "Enter your password...",
    default_name: "password_default_name",
    html_type: "password",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: ["isValidPassword"],
    prevent_spaces: true,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static email = {
    data_type: "string",
    default_label: "Email Address",
    default_placeholder: "Enter your email address...",
    default_name: "email_default_name",
    html_type: "email",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: ["isValidEmail"],
    prevent_spaces: true,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static url = {
    data_type: "string",
    default_label: "URL",
    default_placeholder: "Add your URL...",
    default_name: "url_default_name",
    html_type: "url",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: ["isValidURL"],
    prevent_spaces: true,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static code = {
    data_type: "string",
    default_label: "Code",
    default_placeholder: "Write your code...",
    default_name: "code_default_name",
    html_type: "text",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static icon = {
    data_type: "string",
    default_label: "Icon",
    default_placeholder: "Pick an icon...",
    default_name: "icon_default_name",
    html_type: "text",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static number = {
    data_type: "number",
    default_label: "Number ",
    default_placeholder: "Pick a number...",
    default_name: "number_default_name",
    html_type: "number",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static percentage = {
    data_type: "number",
    default_label: "Percentage ",
    default_placeholder: "Pick a percentage...",
    default_name: "percentage_default_name",
    html_type: "percentage",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static checkbox = {
    data_type: "boolean",
    default_label: "Checkbox",
    default_placeholder: "Checkbox",
    default_name: "checkbox_default_name",
    html_type: "checkbox",
    input_classes: "",
    input_group_classes: "",
    default_value: false,
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static switch = {
    data_type: "boolean",
    default_label: "Switch",
    default_placeholder: "Check",
    default_name: "switch_default_name",
    html_type: "checkbox",
    input_classes: "",
    input_group_classes: "",
    default_value: false,
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static select = {
    data_type: "select",
    default_label: "Select ",
    default_placeholder: "Select an option...",
    default_name: "select_default_name",
    html_type: "select",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static multi_select = {
    data_type: "select",
    default_label: "Multi-Select",
    default_placeholder: "Select one or multiple options...",
    default_name: "multi_select_default_name",
    html_type: "select",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static file = {
    data_type: "file",
    default_label: "File ",
    default_placeholder: "Upload a file...",
    default_name: "file_default_name",
    html_type: "file",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static image = {
    data_type: "file",
    default_label: "Image",
    default_placeholder: "Upload an image...",
    default_name: "image_default_name",
    html_type: "file",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static video = {
    data_type: "file",
    default_label: "Video ",
    default_placeholder: "Upload a video...",
    default_name: "video_default_name",
    html_type: "file",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static csv = {
    data_type: "file",
    default_label: "CSV Input",
    default_placeholder: "CSV default_placeholder",
    default_name: "csv_default_name",
    html_type: "file",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static excel = {
    data_type: "file",
    default_label: "Excel Input",
    default_placeholder: "Excel default_placeholder",
    default_name: "excel_default_name",
    html_type: "file",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static date = {
    data_type: "date",
    default_label: "Date default_label",
    default_placeholder: "Date default_placeholder",
    default_name: "date_default_name",
    html_type: "date",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static date_time = {
    data_type: "date",
    default_label: "Date & Time default_label",
    default_placeholder: "Date & Time default_placeholder",
    default_name: "date_time_default_name",
    html_type: "datetime-local",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static date_picker = {
    data_type: "date",
    default_label: "Date Picker default_label",
    default_placeholder: "Date Picker default_placeholder",
    default_name: "date_picker_default_name",
    html_type: "date",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: null,
    default_max: null,
  };

  static range = {
    data_type: "range",
    default_label: "Range default_label",
    default_placeholder: "Range default_placeholder",
    default_name: "range_default_name",
    html_type: "range",
    input_classes: "",
    input_group_classes: "",
    default_value: "",
    validators: [""],
    prevent_spaces: false,
    default_helper_text: "",
    default_min: 0,
    default_max: 10,
  };
}

export { ControlTypeParameters };
