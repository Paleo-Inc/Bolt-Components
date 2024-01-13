/**
 * Normalize a string by removing spaces, special characters, and converting accented characters to base form.
 *
 * @param {string|Array|Object} input - The input to normalize.
 * @returns {string} - The normalized string.
 */
function NormalizeString(input) {
  // Convert the input to a string
  const str = String(input);

  // Remove spaces and special characters except for letters and digits
  const normalizedStr = str.replace(/[^a-zA-Z0-9À-ÿ]+/g, "");

  // Convert accented characters to base form
  return normalizedStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export { NormalizeString }; // Export the helper function
