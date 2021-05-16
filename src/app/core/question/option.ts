export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface Field {
  optionId?: '';
  optionStatus?: '';
  optionText?: '';
  optionType?: '';
  otherOptionAvailable: boolean;
}

export interface Option {
  optionId?: '';
  optionStatus?: '';
  optionText?: '';
  optionType?: '';
  otherOptionAvailable: boolean;
}
