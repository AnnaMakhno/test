import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  const className = `${styles.button} ${variant === "danger" ? styles.danger : styles.primary}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;