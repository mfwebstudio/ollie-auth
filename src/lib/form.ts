import { FormikProps } from 'formik';

export function isFormFieldValid<T>(form: FormikProps<any>, field: keyof T): boolean {
  return !!(form.values[field] && !form.errors[field]);
}
