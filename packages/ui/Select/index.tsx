import { useState } from "react"
import styles from "./select.styles.module.scss"
import clsx from "clsx"

export type ISelectProps = {
  name: string
}

export const Select: React.FC<
  ISelectProps & React.HTMLAttributes<HTMLSelectElement>
> = (props) => {
  const { name, ...rest } = props
  const [focus, setFocus] = useState(false)

  return (
    <div className={clsx(styles["select"])}>
      <select name="" id="" {...rest}>
        <option value="0">option</option>
      </select>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={clsx(styles["icon"])}
      >
        <path
          d="M16 10L12 14L8 10"
          stroke="#9098B1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}
