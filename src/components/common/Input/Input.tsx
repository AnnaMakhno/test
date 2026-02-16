import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
  <div className={styles.inputGroup}>
    <label htmlFor={id} className={styles.label}>{label}</label>
    <input className={styles.input} id={id} {...props} />
  </div>
);

export default Input;