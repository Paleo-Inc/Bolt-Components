const handleInputChange = (event, setValue, onChange) => {
  const { type, value, checked } = event.target;
  let newValue;

  switch (type) {
    case "checkbox":
    case "switch":
      newValue = checked;
      break;
    case "text":
    case "color":
    case "textarea":
    case "email":
    case "url":
    case "password":
    case "range":
    case "number":
    case "select":
    case "multi_select":
    case "file":
    case "date":
    case "date_time":
    case "date_picker":
      newValue = value;
      break;
    default:
      throw new Error(`Unhandled input type: ${type}`);
  }

  setValue(newValue);

  if (onChange) {
    onChange(event, newValue);
  }
};

export { handleInputChange };
