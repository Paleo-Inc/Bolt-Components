const useInputChangeHandler = (
    setValue,
    setFiles,
    onChange,
    prevent_spaces,
    Helpers,
    controlType
  ) => {
    // Handler for selection from dropdown
    const handleSelect = (e) => {
      const { options, selectedIndex } = e.target;
      const selectedOption = options[selectedIndex];
      const selectedObject = {
        label: selectedOption.text,
        value: selectedOption.value,
      };
      console.log("Selected object: ", selectedObject);
      setValue(selectedObject.value);
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
  