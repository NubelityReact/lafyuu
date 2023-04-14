import { HTMLInputTypeAttribute, useState } from "react"
import styles from "./input.styles.module.scss"
import clsx, { ClassValue } from "clsx"

type tIcon = "email" | "password" | "user" | "phone"

export type IInputProps =
  | {
      name: string
      variant?: "default"
      icon?: tIcon
      type?: "text" | "password" | "email" | "number"
      error?: boolean
      errorLabel?: string
    }
  | {
      name: string
      variant?: "cuppon"
      icon?: never
      type?: "text" | "number"
      error?: boolean
      errorLabel?: string
    }

export type IIconSVGProps = {
  style: ClassValue
  icon: tIcon
}

export const Input: React.FC<
  IInputProps & React.HTMLAttributes<HTMLInputElement>
> = (props) => {
  const {
    icon,
    name,
    variant = "default",
    type = "text",
    error = false,
    errorLabel,
    ...rest
  } = props
  const [focus, setFocus] = useState(false)

  return (
    <div
      className={clsx(
        styles["input"],
        icon && styles["input-icon"],
        error && styles["input-error"],
        variant == "cuppon" && styles["input-cuppon"]
      )}
    >
      {icon && (
        <div className={clsx(styles["icon"])}>
          {" "}
          <IconSVG
            style={clsx(
              focus && styles["icon-focus"],
              error && styles["icon-error"]
            )}
            icon={icon}
          />
        </div>
      )}
      <input
        name={name}
        type={type}
        aria-invalid
        aria-errormessage="ddddaknclksd"
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {variant == "cuppon" && (
        <button className={clsx(styles["apply-button"])}>Apply</button>
      )}
      {error && (
        <div className={clsx(styles["error-label"])}>
          <label htmlFor={name}>{errorLabel}</label>
        </div>
      )}
    </div>
  )
}

const IconSVG: React.FC<IIconSVGProps & React.HTMLAttributes<HTMLElement>> = (
  props
) => {
  const { style, icon } = props

  switch (icon) {
    case "email":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style)}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 5.25C2 4.69772 2.44772 4.25 3 4.25H21C21.5523 4.25 22 4.69772 22 5.25V18.75C22 19.3023 21.5523 19.75 21 19.75H3C2.44772 19.75 2 19.3023 2 18.75V5.25ZM4 6.25V17.75H20V6.25H4Z"
            fill="#9098B1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.24075 4.59922C2.60017 4.17989 3.23147 4.13132 3.6508 4.49074L12 11.6471L20.3492 4.49074C20.7686 4.13132 21.3999 4.17989 21.7593 4.59922C22.1187 5.01855 22.0701 5.64985 21.6508 6.00927L12.6508 13.7234C12.2763 14.0444 11.7237 14.0444 11.3492 13.7234L2.34923 6.00927C1.92991 5.64985 1.88134 5.01855 2.24075 4.59922Z"
            fill="#9098B1"
          />
        </svg>
      )

    case "password":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style)}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 9.75C2 9.19772 2.44772 8.75 3 8.75H21C21.5523 8.75 22 9.19772 22 9.75V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V9.75ZM4 10.75V20H20V10.75H4Z"
            fill="#9098B1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 4C9.48134 4 7.375 6.13206 7.375 8.841C7.375 9.39328 6.92728 9.841 6.375 9.841C5.82272 9.841 5.375 9.39328 5.375 8.841C5.375 5.09919 8.30641 2 12 2C15.6936 2 18.625 5.09919 18.625 8.841C18.625 9.39328 18.1773 9.841 17.625 9.841C17.0727 9.841 16.625 9.39328 16.625 8.841C16.625 6.13206 14.5187 4 12 4Z"
            fill="#9098B1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 13.7257C12.5523 13.7257 13 14.1734 13 14.7257V15.8507C13 16.403 12.5523 16.8507 12 16.8507C11.4477 16.8507 11 16.403 11 15.8507V14.7257C11 14.1734 11.4477 13.7257 12 13.7257Z"
            fill="#9098B1"
          />
        </svg>
      )

    case "user":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style)}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 4.00055C10.3971 4.00055 9.09766 5.29999 9.09766 6.90293C9.09766 8.50587 10.3971 9.80531 12 9.80531C13.603 9.80531 14.9024 8.50587 14.9024 6.90293C14.9024 5.29999 13.603 4.00055 12 4.00055ZM7.09766 6.90293C7.09766 4.19542 9.29253 2.00055 12 2.00055C14.7075 2.00055 16.9024 4.19542 16.9024 6.90293C16.9024 9.61044 14.7075 11.8053 12 11.8053C9.29253 11.8053 7.09766 9.61044 7.09766 6.90293Z"
            fill="#9098B1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.51784 15.3904C6.47035 15.3904 4 17.8608 4 20.9083V20.9994C4 21.5517 3.55228 21.9994 3 21.9994C2.44772 21.9994 2 21.5517 2 20.9994V20.9083C2 16.7562 5.36578 13.3904 9.51784 13.3904H14.4822C18.6342 13.3904 22 16.7562 22 20.9083V20.9994C22 21.5517 21.5523 21.9994 21 21.9994C20.4477 21.9994 20 21.5517 20 20.9994V20.9083C20 17.8608 17.5296 15.3904 14.4822 15.3904H9.51784Z"
            fill="#9098B1"
          />
        </svg>
      )

    case "phone":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style)}
        >
          <path
            d="M17.625 3H6.375V21H17.625V3Z"
            stroke="#9098B1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9941 17.625H12.0054"
            stroke="#9098B1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )
  }
}
