"use client"

import { InputHTMLAttributes, ReactNode } from "react"

import { cl } from "@/utils"
import { CheckIcon } from "@/Icons"

import styles from "./index.module.scss"

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  className?: string
}

const Checkbox = ({ label, className, ...props }: ICheckbox) => {
  return (
    <div className={cl(styles.checkboxGroup, className)}>
      <div className={cl(styles.checkboxGroup__checkbox, className)}>
        <input
          type="checkbox"
          {...props}
          className={styles.checkboxGroup__input}
        />
        <CheckIcon size={14} className={styles.checkboxGroup__icon} />
      </div>
      {label && <label className={styles.checkboxGroup__label}>{label}</label>}
    </div>
  )
}

export default Checkbox
