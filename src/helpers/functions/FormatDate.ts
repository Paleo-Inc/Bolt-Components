function FormatDate(timestamp: number, format?: string): string {
  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  // Default format: "Dec 31, 2023, 5:46 PM"
  if (!format) {
    return date.toLocaleString("en-US", options);
  }

  // Custom format handling
  const customFormatted = format
    .replace("MM", date.toLocaleString("en-US", { month: "short" }))
    .replace("DD", date.getDate().toString())
    .replace("YYYY", date.getFullYear().toString())
    .replace(
      "hh",
      date.getHours() > 12 ? (date.getHours() - 12).toString() : date.getHours().toString()
    )
    .replace("mm", date.getMinutes().toString().padStart(2, "0"))
    .replace("a", date.getHours() >= 12 ? "PM" : "AM");

  return customFormatted;
}

export { FormatDate };
