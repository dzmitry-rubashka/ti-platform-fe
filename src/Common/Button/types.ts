export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "small" | "large";
  variant:
    | "primary"
    | "secondary"
    | "subtle"
    | "warning"
    | "danger"
    | "light"
    | "colored";
}
