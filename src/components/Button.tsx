import { ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => (
  <button
    color="primary"
    type="button"
    className={"btn btn-" + color}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
