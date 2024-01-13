import { ToCamelCase } from "./ToCamelCase";
import { ToPascalCase } from "./ToPascalCase";
import { ToKebabCase } from "./ToKebabCase";
import { FormatDate } from "./FormatDate";
import { TruncateText } from "./TruncateText";
import { NormalizeString } from "./NormalizeString";
import { removeSpaces } from "./RemoveSpaces";
import { CapitalizeWords } from "./CapitalizeWords";

class Helpers {
  static ToCamelCase = ToCamelCase;
  static ToPascalCase = ToPascalCase;
  static ToKebabCase = ToKebabCase;
  static FormatDate = FormatDate;
  static TruncateText = TruncateText;
  static NormalizeString = NormalizeString;
  static removeSpaces = removeSpaces;
  static CapitalizeWords = CapitalizeWords;
}

export { Helpers };
