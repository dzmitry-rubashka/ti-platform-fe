export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: Object;
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  fieldLabel?: string;
}
