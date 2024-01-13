// Define a type for the file type details
export type FileType = {
  friendlyName: string,
  description: string,
  icon: string,
  extension: string,
};

// Define a type for the FileTypes mapping
type FileTypeMapping = {
  [key: string]: FileType,
};

class FileTypes {
  static FileTypes: FileTypeMapping = {
    "image/jpeg": {
      friendlyName: "JPEG Image",
      description: "A common image format with lossy compression.",
      icon: "image",
      extension: "jpg",
    },
    "image/png": {
      friendlyName: "PNG Image",
      description: "A popular image format with lossless compression.",
      icon: "image",
      extension: "png",
    },
    "application/pdf": {
      friendlyName: "PDF Document",
      description: "Portable Document Format for documents.",
      icon: "file",
      extension: "pdf",
    },
    "text/plain": {
      friendlyName: "Plain Text",
      description: "Simple text file with no formatting.",
      icon: "file-text",
      extension: "txt",
    },
    "text/csv": {
      friendlyName: "CSV File",
      description: "Comma-separated values data file.",
      icon: "table",
      extension: "csv",
    },
    "text/html": {
      friendlyName: "HTML File",
      description: "Hypertext Markup Language document.",
      icon: "code",
      extension: "html",
    },
    "application/xml": {
      friendlyName: "XML File",
      description: "Extensible Markup Language document.",
      icon: "code",
      extension: "xml",
    },
    "application/json": {
      friendlyName: "JSON File",
      description: "JavaScript Object Notation data format.",
      icon: "code",
      extension: "json",
    },
    "audio/mpeg": {
      friendlyName: "MP3 Audio",
      description: "MPEG audio file format.",
      icon: "play-circle",
      extension: "mp3",
    },
    "audio/ogg": {
      friendlyName: "Ogg Audio",
      description: "Ogg Vorbis audio file format.",
      icon: "play-circle",
      extension: "ogg",
    },
    "video/mp4": {
      friendlyName: "MP4 Video",
      description: "MPEG-4 video file format.",
      icon: "play-circle",
      extension: "mp4",
    },
    "application/zip": {
      friendlyName: "ZIP Archive",
      description: "Compressed archive file.",
      icon: "folder",
      extension: "zip",
    },
    "image/gif": {
      friendlyName: "GIF Image",
      description: "Graphics Interchange Format image.",
      icon: "image",
      extension: "gif",
    },
    "image/bmp": {
      friendlyName: "BMP Image",
      description: "Bitmap image format.",
      icon: "image",
      extension: "bmp",
    },
    "image/svg+xml": {
      friendlyName: "SVG Image",
      description: "Scalable Vector Graphics image.",
      icon: "image",
      extension: "svg",
    },
    "audio/wav": {
      friendlyName: "WAV Audio",
      description: "Waveform audio file format.",
      icon: "play-circle",
      extension: "wav",
    },
    "audio/flac": {
      friendlyName: "FLAC Audio",
      description: "Free Lossless Audio Codec file format.",
      icon: "play-circle",
      extension: "flac",
    },
    // Add "extension" key to other mappings as needed
  };
}

export default {FileTypes};
