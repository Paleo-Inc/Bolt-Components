function ToCamelCase(inputString) {
  // Check if the inputString is undefined, null, or an empty string
  if (
    inputString === undefined ||
    inputString === null ||
    inputString.trim() === ""
  ) {
    return "invalid-input";
  }

  // Split the input string by spaces or underscores
  const words = inputString.split(/[ _]/);

  // Capitalize the first letter of each word (except the first one)
  for (let i = 1; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  // Join the words back together without spaces or underscores
  return words.join("");
}

export { ToCamelCase };
