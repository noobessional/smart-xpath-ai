import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ variant = "solid", onClick, children, placeholder }) => {
  return (
    <button className={`${styles[variant]}`} onClick={onClick}>
      {children || placeholder}
    </button>
  );
};

export default Button;
