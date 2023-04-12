import React, { FC } from "react";
import styles from "./typography.styles.module.scss";
import clsx from "clsx";

type TextTags = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyVariants = "h1" | "h2" | "normal";

export interface ITypographyProps {
  variant?: TypographyVariants;
  as?: TextTags;
  children: React.ReactNode;
}

const Typography: FC<
  ITypographyProps & React.HtmlHTMLAttributes<HTMLElement>
> = (props) => {
  const { as = "p", children, variant = "normal", className, ...rest } = props;
  return React.createElement(
    as,
    { className: clsx(styles.generals, styles[variant], className), ...rest },
    children
  );
};

export default Typography;
