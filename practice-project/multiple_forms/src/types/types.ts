import type { UseFormRegister, FieldErrors } from "react-hook-form";

export interface FieldConfig {
  name: string;
  label: string;
  required?: boolean;
  type: string;
  options?: string[];
  visibleWhen?: (formData: any) => boolean;
}

export interface Props {
  fields: FieldConfig[];
  register: UseFormRegister<any>;
  errors: FieldErrors;
  formData: any;
}
