function ToKebabCase(inputString) {
  // Check if the inputString is undefined, null, or an empty string
  if (
    inputString === undefined ||
    inputString === null ||
    inputString.trim() === ""
  ) {
    return "invalid-input";
  }

  // Split the input string by spaces or hyphens
  const words = inputString.trim().split(/[ -]/);

  // Capitalize the first letter of each word (except the first one)
  for (let i = 1; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  // Join the words back together with hyphens and convert to lowercase
  return words.join("-").toLowerCase();
}

export { ToKebabCase };
