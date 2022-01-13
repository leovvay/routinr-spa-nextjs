export interface ResetPasswordFormInputs {
  email: string;
}

export interface ResetResponse {
  success: boolean;
  error: null | string;
}
