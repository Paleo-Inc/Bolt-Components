const useInputChangeHandler = (
  setValue,
  setFiles,
  onChange,
  prevent_spaces,
  Helpers,
  controlType,
  returnformat
) => {
  // Handler for selection from dropdown
  const handleSelect = (e) => {
    const { options, selectedIndex } = e.target;
    const selectedOption = options[selectedIndex];
    const selectedObject = {
      label: selectedOption.text,
      value: selectedOption.value,
    };

    let returnValue;

    if (returnformat) {
      switch (returnformat) {
        case "labelvalue":
          returnValue = selectedObject;
          break;
        case "value":
          returnValue = selectedObject.value;
          break;
        case "target":
          returnValue = e.target;
          break;
        default:
          console.log("Invalid return format, defaulting to value");
          returnValue = selectedObject.value;
      }
    } else {
      returnValue = selectedObject.value;
    }

    if (setValue) setValue(returnValue);
    if (onChange) onChange(returnValue);
    console.log("Return value: ", returnValue);
  };

  // Generalized input change handler
  const handleInputChange = (e) => {
    const { type, checked, value: inputValue } = e.target;

    switch (controlType) {
      case "select":
        handleSelect(e);
        break;

      case "file":
        handleFileChange(e);
        break;

      default:
        const finalValue =
          type === "checkbox" || type === "switch"
            ? checked
            : prevent_spaces
            ? Helpers.removeSpaces(inputValue)
            : inputValue;
        console.log("Final value: ", finalValue);
        setValue(finalValue);
        if (onChange) onChange(e, finalValue);
        break;
    }
  };

  // Handler for file input
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log("Selected files:", selectedFiles);
    if (selectedFiles.length > 0) {
      setValue(selectedFiles);
      setFiles(selectedFiles);

      if (onChange) onChange(selectedFiles);
    }
  };

  return { handleInputChange, handleFileChange };
};

export default useInputChangeHandler;
