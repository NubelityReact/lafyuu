import * as React from "react";
import "./button.styles.module.css";
import clsx from "clsx";

export interface IButtonProps {
  children: React.ReactNode;
  text?: string;
  variant: "primary" | "secondary";
  size: "small" | "large";
  icon?: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, size, variant, icon, text, ...rest } = props;
  return (
    <button
      className={clsx(size === "large" ? "large" : "small", variant)}
      {...rest}
    >
      {icon && (
        <picture>
          <img src={icon} alt="" />
        </picture>
      )}
      <span>{text ?? children}</span>
    </button>
  );
};
