import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { ControllerFieldState } from 'react-hook-form/dist/types/controller';

export interface CustomControllerRenderProps<Field extends string> {
  field: ControllerRenderProps<FieldValues, Field>;
  fieldState: ControllerFieldState;
}

export interface CompleteRegistrationFormInputs {
  firstName: string;
  lastName: string;
  handle: string;
  isCreator: boolean;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  instagram?: string;
}
