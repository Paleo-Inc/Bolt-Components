import image1 from "./content/example_jpg_image.jpg";
import image2 from "./content/zapier-icon-2048x2048-s2hfw03a.png";
// import examplePdfData from "./content/example_pdf.pdf"; // Import PDF as a data URI

class TestData {
  static exampleFiles = [
    {
      name: "example-image.jpg",
      type: "image/jpeg",
      data: image1,
    },
    {
      name: "example-image.png",
      type: "image/png",
      data: image2,
    },
    {
      name: "example-document.pdf",
      type: "application/pdf",
      data: "examplePdfData",
    },
    {
      name: "example-text.txt",
      type: "text/plain",
      data: "This is a plain text file.",
    },
    {
      name: "example-csv.csv",
      type: "text/csv",
      data: "CSV data,CSV data,CSV data",
    },
    {
      name: "example-html.html",
      type: "text/html",
      data: "<html><body><h1>Hello, HTML!</h1></body></html>",
    },
    {
      name: "example-xml.xml",
      type: "application/xml",
      data: "<root><element>XML Data</element></root>",
    },
    {
      name: "example-json.json",
      type: "application/json",
      data: '{"key": "value"}',
    },
    {
      name: "example-mp3.mp3",
      type: "audio/mpeg",
      data: "MP3 audio data",
    },
    {
      name: "example-ogg.ogg",
      type: "audio/ogg",
      data: "Ogg Vorbis audio data",
    },
    {
      name: "example-mp4.mp4",
      type: "video/mp4",
      data: "MP4 video data",
    },
    {
      name: "example-zip.zip",
      type: "application/zip",
      data: "ZIP archive data",
    },
    // Additional MIME types
    {
      name: "example-gif.gif",
      type: "image/gif",
      data: "GIF image data",
    },
    {
      name: "example-bmp.bmp",
      type: "image/bmp",
      data: "BMP image data",
    },
    {
      name: "example-svg.svg",
      type: "image/svg+xml",
      data: "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='2' fill='red'/></svg>",
    },
    {
      name: "example-wav.wav",
      type: "audio/wav",
      data: "WAV audio data",
    },
    {
      name: "example-flac.flac",
      type: "audio/flac",
      data: "FLAC audio data",
    },
  ]
  static defaultColors = [
    { label: "Red", value: "#FF0000" },
    { label: "Green", value: "#61D095" },
    { label: "Blue", value: "#007FFF" },
    { label: "Yellow", value: "#EFCB68" },
    { label: "Purple", value: "#52154E" },
    { label: "Orange", value: "#F9A03F" },
    { label: "Pink", value: "#F7B2AD" },
    { label: "Brown", value: "#534D41" },
    { label: "Black", value: "#000000" },
    { label: "White", value: "#FFFFFF" },
  ];
}

export { TestData };
