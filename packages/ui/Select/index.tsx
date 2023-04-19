import { useState } from "react"
import styles from "./select.styles.module.scss"
import clsx from "clsx"

export type TOption = {
  text: string
  value: string | number
}

export type TSelectProps = {
  name: string
  items: Array<TOption>
}

export const Select: React.FC<
  TSelectProps & React.HTMLAttributes<HTMLSelectElement>
> = (props) => {
  const { name, items, ...rest } = props
  const [focus, setFocus] = useState(false)

  return (
    <div className={clsx(styles["select"])}>
      <select name={name} id={name} {...rest}>
        {items.map((item, index) => (
          <option
            key={index}
            className={clsx(styles["option"])}
            value={item.value}
          >
            {item.text}
          </option>
        ))}
      </select>
      <i></i>
    </div>
  )
}
