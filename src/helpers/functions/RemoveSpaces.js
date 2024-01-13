/**
 * Removes all spaces from the given text and trims leading and trailing whitespace.
 * @param {string} text - The text to process.
 * @return {string} The processed text with spaces removed.
 */

function removeSpaces(text) {
  if (text === null || typeof text !== "string") {
    return ""; // Return an empty string if input is null or not a string
  }
  return text.replace(/\s+/g, "").trim();
}
export { removeSpaces };
