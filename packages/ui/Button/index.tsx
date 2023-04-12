import * as React from "react";
import styles from "./button.styles.module.scss";
import clsx from "clsx";
import Typography from "../Typography";

export type IButtonProps =
  | {
      children?: never;
      text: string;
      variant: "primary" | "secondary";
      size?: "small" | "large";
      icon?: string;
    }
  | {
      children: React.ReactNode;
      text?: never;
      variant: "primary" | "secondary";
      size?: "small" | "large";
      icon?: string;
    };

export const Button: React.FC<
  IButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = (props) => {
  const {
    children,
    size = "small",
    variant,
    icon,
    text,
    className,
    ...rest
  } = props;
  return (
    <button
      className={clsx(
        styles.button,
        size === "large" && styles.large,
        styles[variant],
        className
      )}
      {...rest}
    >
      {icon && (
        <picture
          className={clsx(
            styles.picture,
            size === "large" && styles.pictureLarge
          )}
        >
          <img src={icon} alt="" />
        </picture>
      )}
      <Typography>{text ?? children}</Typography>
    </button>
  );
};
