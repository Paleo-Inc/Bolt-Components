import ControlTypes, { ControlType } from "./ControlTypes";
import inputProperties, { InputProperty } from "./InputProperties";
import FileTypes, { FileType } from "./FileTypes";

class Config {
  controlTypes: ControlType[];
  inputProperties: InputProperty[];
  fileTypes: typeof FileTypes;

  constructor() {
    this.controlTypes = ControlTypes;
    this.inputProperties = inputProperties;
    this.fileTypes = FileTypes;
  }

  // Getter method to access controlTypes
  public getControlTypes(): ControlType[] {
    return this.controlTypes;
  }

  public getInputProperties(): InputProperty[] {
    return this.inputProperties;
  }

  public getFileTypes(): typeof FileTypes {
    return this.fileTypes;
  }

  // Additional methods or properties if required
  // ...
}

export default Config;
