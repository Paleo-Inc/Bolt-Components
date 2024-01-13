function TruncateText(text, limit, ellipsis = "...") {
  if (text == null) {
    console.warn("TruncateText: Text is null or undefined");
    return "";
  }

  if (typeof text !== "string") {
    console.warn("TruncateText: Expected a string as text input");
    return "";
  }

  if (typeof limit !== "number" || limit < 0) {
    console.warn("TruncateText: Invalid limit. Expected a positive number");
    return text;
  }

  const endLength = 4; // Number of characters to keep at the end

  if (text.length > limit) {
    // Calculate the length of the first part of the text
    const frontLength = limit - ellipsis.length - endLength;

    if (frontLength < 0) {
      console.warn(
        "TruncateText: Limit too small for the specified ellipsis and end length"
      );
      return text;
    }

    const frontPart = text.slice(0, frontLength);
    const endPart = text.slice(-endLength);

    return frontPart + ellipsis + endPart;
  }

  return text;
}

export { TruncateText };
