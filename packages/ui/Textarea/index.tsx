import { useState } from "react"
import styles from "./textarea.styles.module.scss"
import clsx from "clsx"

export type ITextareaProps = {
  name: string
}

export const Textarea: React.FC<
  ITextareaProps & React.HTMLAttributes<HTMLTextAreaElement>
> = (props) => {
  const { name, ...rest } = props

  return (
    <div className={clsx(styles["textarea"])}>
      <textarea name={name} {...rest}></textarea>
    </div>
  )
}
