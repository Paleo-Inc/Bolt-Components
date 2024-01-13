function ToPascalCase(str) {
  // Check if the input is undefined, null, or an empty string
  if (str === undefined || str === null || str.trim() === "") {
    return "invalid-input";
  }

  // Convert to Pascal case
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

export { ToPascalCase };
