// --- Note ---
// All validators need
// -Single input parameter, which is the value to be validated.
// -Single output parameter, which is an object with two properties: valid and message.

class Validators {
  static isValidEmail(email) {
    // Check if the email starts with "@" or a special character
    if (/^[@!#$%^&*()_+|~=`{}\[\]:;"'<>,?/]/.test(email)) {
      return {
        valid: false,
        message: "Email cannot start with a special character.",
      };
    }

    // Check for missing "@" symbol
    if (email.indexOf("@") === -1) {
      return { valid: false, message: "Email is missing the '@' symbol." };
    }

    // Split the email address into username and domain parts
    const [username, domain] = email.split("@");

    // Check for invalid characters in the username and domain
    const invalidChars = /[!#$%^&*()_+|~=`{}\[\]:;"'<>,?/]/;
    if (invalidChars.test(username) || invalidChars.test(domain)) {
      return { valid: false, message: "Email contains invalid characters." };
    }

    // Check for consecutive dots in the domain
    if (domain.includes("..")) {
      return {
        valid: false,
        message: "Email contains consecutive dots in the domain.",
      };
    }

    // Check for a valid top-level domain (TLD)
    const tldPattern = /^[a-zA-Z]{2,}$/;
    if (!tldPattern.test(domain.split(".").pop())) {
      return {
        valid: false,
        message: "Email has an invalid top-level domain (TLD).",
      };
    }

    // Check for at least one dot after the "@" symbol
    if (
      domain.indexOf(".") === -1 ||
      domain.indexOf(".") <= domain.indexOf("@") + 1
    ) {
      return {
        valid: false,
        message:
          "There must be at least one character between '@' and '.' in the domain.",
      };
    }

    // Check for a valid domain format
    const domainPattern = /^[a-zA-Z0-9.-]+$/;
    if (!domainPattern.test(domain)) {
      return { valid: false, message: "Email has an invalid domain format." };
    }

    // If all checks pass, return true (valid email) with an empty message
    return { valid: true, message: "" };
  }

  static isValidPassword(password) {
    // Check for spaces in the password
    if (password.indexOf(" ") !== -1) {
      return { valid: false, message: "Password cannot contain spaces." };
    }

    // Check for minimum length of 6 characters
    if (password.length < 6) {
      return {
        valid: false,
        message: "Password must have at least 6 characters.",
      };
    }

    // If all checks pass, return true (valid password) with an empty message
    return { valid: true, message: "" };
  }

  static isValidURL(url) {
    // Regular expression to check for a basic URL structure
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/;
    if (!urlPattern.test(url)) {
      return { valid: false, message: "Invalid URL format." };
    }

    // Assuming the URL is of a correct format, use the URL constructor
    const parsedURL = new URL(url);

    // Check if the hostname is valid (e.g., "example.com")
    if (!parsedURL.hostname) {
      return {
        valid: false,
        message: "Invalid URL format: missing hostname.",
      };
    }

    // Check if the URL has a valid path
    if (!parsedURL.pathname || parsedURL.pathname === "/") {
      return { valid: false, message: "URL must have a valid path." };
    }

    // If all checks pass, return true (valid URL) with an empty message
    return { valid: true, message: "" };
  }

  static onlyLetters(value) {
    // Check if the value contains only letters
    const lettersPattern = /^[A-Za-z]+$/;
    if (!lettersPattern.test(value)) {
      return { valid: false, message: "Value must contain only letters." };
    }

    // If all checks pass, return true (valid) with an empty message
    return { valid: true, message: "" };
  }

  static onlyNumbers(value) {
    // Check if the value contains only numbers
    const numbersPattern = /^[0-9]+$/;
    if (!numbersPattern.test(value)) {
      return { valid: false, message: "Value must contain only numbers." };
    }

    // If all checks pass, return true (valid) with an empty message
    return { valid: true, message: "" };
  }
}
export { Validators };
