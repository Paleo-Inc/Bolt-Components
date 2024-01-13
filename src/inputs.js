import { SelectInput } from "./input-components/Select";
import { RangeInput } from "./input-components/Range";
import { NumberInput } from "./input-components/Number";
import { FileInput } from "./input-components/File";
import { String } from "./input-components/String";
import { Boolean } from "./input-components/Boolean";

// Organize them under the Input object
const Input = {
  Select: SelectInput,
  Range: RangeInput,
  Number: NumberInput,
  File: FileInput,
  String: String,
  Boolean: Boolean,
};

// Export the Input object
export { Input };
