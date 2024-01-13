const HandleInputChange = (e, currentValue, setValue, onChange) => {
  let newValue;

  switch (e.target.type) {
    case "checkbox":
    case "switch":
      newValue = e.target.checked;
      break;
    case "text":
    case "color":
    case "textarea":
    case "number":
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
      newValue = e.target.value;
      break;
    default:
      console.warn(`Unhandled input type: ${e.target.type}`);
      return;
  }

  setValue(newValue);

  if (onChange) {
    onChange(e, newValue);
  }
};

export { HandleInputChange };
